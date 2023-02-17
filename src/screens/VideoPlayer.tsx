import React, {useCallback, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Orientation from 'react-native-orientation-lockers';
import {View, StyleSheet, GestureResponderEvent, StatusBar} from 'react-native';
import Video from 'react-native-video';
import Controls from '../components/organisms/Controls';

const VideoPlayer = () => {
  const url =
    'https://di-kzbhv8pw.vo.lswcdn.net/sportitalia/smil:sihd02.smil/playlist.m3u8';
  const title = 'Sportitalia HD';
  const type = 'Channel';

  const [play, setPlay] = useState(true);
  const [fullScreen, setFullScreen] = useState(true);
  const videoRef = useRef<any>();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [onVideoError, setOnVideoError] = useState<string | null>();
  const [seekableDuration, setSeekableDuration] = useState();
  const [mute, setMute] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  const handleRewind = (e: GestureResponderEvent) => {
    e.stopPropagation();
    videoRef.current.seek(currentTime - 10);
    setCurrentTime(currentTime - 10);
  };

  const handleForward = (e: GestureResponderEvent) => {
    e.stopPropagation();
    videoRef.current.seek(currentTime + 10);
    setCurrentTime(currentTime + 10);
  };

  const onSlidingCompleteSlider = (e: any) => {
    setPlay(!play);
    videoRef.current.seek(e);
  };
  const handleLive = () => {
    videoRef.current.seek(seekableDuration);
    setPlay(true);
  };

  useFocusEffect(
    useCallback(() => {
      if (fullScreen) {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    }, [fullScreen]),
  );

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Video
        style={styles.video}
        source={{
          uri: url,
        }}
        resizeMode={fullScreen ? 'cover' : 'contain'}
        controls={false}
        repeat={true}
        muted={mute}
        paused={!play}
        ref={videoRef}
        onProgress={(e: {
          currentTime: React.SetStateAction<number>;
          seekableDuration: React.SetStateAction<undefined>;
        }) => {
          setCurrentTime(e.currentTime);
          setSeekableDuration(e.seekableDuration);
        }}
        onLoad={(e: any) => {
          setIsLoading(false);
          setPlay(true);
          setDuration(e.duration);
        }}
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onBuffer={(e: {
          isBuffering: boolean | ((prevState: boolean) => boolean);
        }) => {
          setIsLoading(e.isBuffering);
          e.isBuffering === false && setOnVideoError(null);
        }}
        onEnd={() => {
          setPlay(false);
          setCurrentTime(0);
        }}
        onError={(e: {error: React.SetStateAction<any>}) => {
          setOnVideoError(e.error);
          setIsLoading(true);
        }}
      />
      <Controls
        onPlay={handlePlay}
        playing={play}
        handleRewind={handleRewind}
        handleForward={handleForward}
        isLoading={isLoading}
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        duration={duration > 0 ? duration : 0}
        title={title}
        error={onVideoError ? onVideoError : null}
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        mute={mute}
        setMute={setMute}
        handleLive={handleLive}
        type={type}
        onSlidingStartSlider={onSlidingCompleteSlider}
        onSlidingCompleteSlider={onSlidingCompleteSlider}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    width: '100%',
    height: '100%',
  },
  video: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
});
