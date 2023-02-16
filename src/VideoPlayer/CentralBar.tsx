import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';
import React from 'react';
import {controls} from '../types';
import FastImage from 'react-native-fast-image';
//@ts-ignore
import pause from '../assets/pause.png';
//@ts-ignore
import play from '../assets/play.png';
//@ts-ignore
import rewindIcon from '../assets/rewind.png';
//@ts-ignore
import forwardIcon from '../assets/forward.png';

type CentralBar = {
  onPlay: (event: GestureResponderEvent) => void;
  playing: boolean;
  fullScreen: boolean;
  handleForward: (event: GestureResponderEvent) => void;
  handleRewind: (event: GestureResponderEvent) => void;
  isLoading: boolean;
};

const CentralBar = ({
  onPlay,
  playing,
  fullScreen,
  handleForward,
  handleRewind,
  isLoading,
}: CentralBar) => {
  const centralbarPosition = {
    bottom: '15%',
    position: 'absolute',
  };

  return (
    <View
      //@ts-ignore
      style={[styles.centralContainer, !fullScreen && centralbarPosition]}
      onTouchStart={e => {
        e.stopPropagation();
      }}>
      <TouchableOpacity onPress={handleRewind}>
        <FastImage
          style={styles.rewind}
          source={rewindIcon}
          resizeMode="cover"
        />
      </TouchableOpacity>

      {isLoading ? (
        <ActivityIndicator
          style={{width: 70, height: 70}}
          size="large"
          color="#ffffff"
        />
      ) : (
        <TouchableOpacity onPress={onPlay}>
          {playing ? (
            <FastImage style={styles.pause} source={pause} resizeMode="cover" />
          ) : (
            <FastImage style={styles.play} source={play} resizeMode="cover" />
          )}
        </TouchableOpacity>
      )}

      <TouchableOpacity onPress={handleForward}>
        <FastImage
          style={styles.forward}
          source={forwardIcon}
          resizeMode="cover"
        />
      </TouchableOpacity>
    </View>
  );
};

export default CentralBar;

const styles = StyleSheet.create({
  centralContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    zIndex: 99,
    width: '50%',
  },
  pause: {
    width: 70,
    height: 70,
  },
  play: {
    width: 70,
    height: 70,
  },
  rewind: {
    width: 70,
    height: 70,
  },
  forward: {
    width: 70,
    height: 70,
  },
});
