import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TopBar from './TopBar';

const Controls = ({
  currentTime,
  onPlay,
  playing,
  isLoading,
  forward,
  rewind,
  duration,
  onSlidingStart,
  onSlidingComplete,
  title,
  error,
  fullScreen,
  setFullScreen,
  mute,
  setMute,
  handleLive,
  type,
}: any) => {
  return (
    <View style={[styles.controlsContainer]}>
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
        </>
      )}
    </View>
  );
};

export default Controls;

var styles = StyleSheet.create({
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
