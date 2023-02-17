import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import Slider from '@react-native-community/slider';
//@ts-ignore
import Live from '../../assets/Live.png';
//@ts-ignore
import exitFullScreen from '../../assets/exitFullScreen.png';
//@ts-ignore
import showFullScreen from '../../assets/fullScreen.png';

type ProgressBarType = {
  currentTime: number | any;
  setCurrentTime: (event: any) => void;
  duration: number | any;
  onSlidingStartSlider: (event: any) => void;
  onSlidingCompleteSlider: (event: any) => void;
  fullScreen: boolean;
  setFullScreen: React.Dispatch<React.SetStateAction<boolean>> | any;
  handleLive: Function;
  type: string;
};

const ProgressBar = ({
  currentTime,
  duration,
  onSlidingStartSlider,
  onSlidingCompleteSlider,
  fullScreen,
  setFullScreen,
  handleLive,
  type,
}: ProgressBarType) => {
  const addZeros = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const getTime = (time: number) => {
    const secs = time % 60;
    const s2 = (time - secs) / 60;
    const mins = s2 % 60;
    const hrs = (s2 - mins) / 60;
    const hours = addZeros(hrs) > 0 ? `${addZeros(hrs)}:` : '';
    const savedTime = `${hours}${addZeros(mins)}:${addZeros(secs)}`;
    if (savedTime.includes('NaN')) {
      return '00:00';
    } else {
      return `${hours}${addZeros(mins)}:${addZeros(secs)}`;
    }
  };

  console.log('curr', currentTime);

  return (
    <View
      style={styles.wrapper}
      onTouchStart={e => {
        e.stopPropagation();
      }}>
      <TouchableOpacity
        onPress={() => {
          handleLive();
        }}>
        {type === 'Channel' ? (
          <FastImage style={{width: 70, height: 70}} source={Live} />
        ) : null}
      </TouchableOpacity>

      <Text style={styles.duration}>{getTime(parseInt(currentTime))}</Text>
      <Slider
        style={{
          width: fullScreen ? '80%' : '60%',
        }}
        minimumValue={0}
        maximumValue={duration}
        value={currentTime}
        step={1}
        maximumTrackTintColor="grey"
        minimumTrackTintColor="blue"
        thumbTintColor="blue"
        onSlidingStart={onSlidingStartSlider}
        onSlidingComplete={onSlidingCompleteSlider}
      />
      <Text style={styles.duration}>{getTime(parseInt(duration))}</Text>
      <TouchableOpacity
        onPress={e => {
          e.stopPropagation();
          setFullScreen(!fullScreen);
        }}>
        {fullScreen ? (
          <FastImage style={{width: 30, height: 30}} source={exitFullScreen} />
        ) : (
          <FastImage style={{width: 30, height: 30}} source={showFullScreen} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 100,
    position: 'absolute',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 20,
    width: '95%',
  },
  duration: {
    color: 'white',
  },
});
