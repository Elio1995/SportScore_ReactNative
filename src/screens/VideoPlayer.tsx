import React, {useCallback, useRef, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import Orientation from 'react-native-orientation-lockers';
import {View, StyleSheet, GestureResponderEvent, StatusBar} from 'react-native';
import Video from 'react-native-video';
import Controls from '../VideoPlayer/Controls';

const VideoPlayer = () => {
  const [play, setPlay] = useState(true);
  const [fullScreen, setFullScreen] = useState(true);
  const videoRef = useRef<any>();
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [onVideoError, setOnVideoError] = useState<string | null>();
  const [currentTime, setCurrentTime] = useState(0);
  const [seekDuration, setSeekDuration] = useState();
  const [mute, setMute] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (fullScreen) {
        Orientation.lockToLandscape();
      } else {
        Orientation.lockToPortrait();
      }
    }, [fullScreen]),
  );

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
    videoRef.current.seek(seekDuration);
    setPlay(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Video
        style={styles.video}
        source={{
          uri: 'https://di-kzbhv8pw.vo.lswcdn.net/sportitalia/smil:sihd02.smil/playlist.m3u8',
        }}
        resizeMode={fullScreen ? 'cover' : 'contain'}
        controls={false}
        repeat={true}
        muted={mute}
        paused={!play}
        ref={videoRef}
        onProgress={(e: {
          currentTime: React.SetStateAction<number>;
          seekDuration: React.SetStateAction<undefined>;
        }) => {
          setCurrentTime(e.currentTime);
          setSeekDuration(e.seekDuration);
        }}
        onLoad={(e: {duration: React.SetStateAction<number>}) => {
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
        rewind={handleRewind}
        forward={handleForward}
        isLoading={isLoading}
        currentTime={currentTime}
        duration={duration > 0 ? duration : 0}
        onSlidingStart={onSlidingCompleteSlider}
        onSlidingComplete={onSlidingCompleteSlider}
        title="Sportitalia HD"
        error={onVideoError ? onVideoError : null}
        fullScreen={fullScreen}
        setFullScreen={setFullScreen}
        mute={mute}
        setMute={setMute}
        handleLive={handleLive}
        type="Channel"
      />
    </View>
  );
};

export default VideoPlayer;

var styles = StyleSheet.create({
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
