import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {controls} from '../types';
import CentralBar from './CentralBar';
import ProgressBar from './ProgressBar';
import TopBar from './TopBar';

const Controls = ({
  currentTime,
  setCurrentTime,
  onPlay,
  playing,
  isLoading,
  handleForward,
  handleRewind,
  duration,
  onSlidingStartSlider,
  onSlidingCompleteSlider,
  title,
  error,
  fullScreen,
  setFullScreen,
  mute,
  setMute,
  handleLive,
  type,
}: controls) => {
  const [opacity, setOpacity] = useState(true);

  return (
    <View
      style={[styles.controlsContainer, {opacity: opacity ? 1 : 0}]}
      onTouchStart={() => {
        setOpacity(!opacity);
      }}>
      {error ? (
        <Text style={styles.videoError}>{error.errorString}</Text>
      ) : (
        <>
          <TopBar
            title={title}
            mute={mute}
            fullScreen={fullScreen}
            setMute={setMute}
          />

          <CentralBar
            fullScreen={fullScreen}
            onPlay={onPlay}
            playing={playing}
            isLoading={isLoading}
            handleRewind={handleRewind}
            handleForward={handleForward}
          />
          <ProgressBar
            duration={duration}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            onSlidingStartSlider={onSlidingStartSlider}
            onSlidingCompleteSlider={onSlidingCompleteSlider}
            fullScreen={fullScreen}
            setFullScreen={setFullScreen}
            handleLive={handleLive}
            type={type}
          />
        </>
      )}
    </View>
  );
};

export default Controls;

const styles = StyleSheet.create({
  controlsContainer: {
    position: 'absolute',
    zIndex: 99,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.55)',
  },
  videoError: {
    color: 'white',
    fontSize: 20,
  },
});
