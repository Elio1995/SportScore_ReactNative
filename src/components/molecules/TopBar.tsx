import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
//@ts-ignore
import mutedVolume from '../../assets/mutedVolume.png';
//@ts-ignore
import volume from '../../assets/volume.png';
//@ts-ignore
import goBack from '../../assets/goBack.png';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-lockers';

type TopBar = {
  title: string;
  mute: boolean;
  setMute: React.Dispatch<React.SetStateAction<boolean>>;
  fullScreen: boolean;
};

const TopBar = ({title, mute, setMute, fullScreen}: TopBar) => {
  const navigation = useNavigation();

  return (
    <View
      style={[styles.topBar]}
      onTouchStart={e => {
        e.stopPropagation();
      }}>
      <TouchableOpacity
        onPress={() => {
          setMute(!mute);
        }}>
        {mute ? (
          <FastImage style={styles.volume} source={mutedVolume} />
        ) : (
          <FastImage style={styles.volume} source={volume} />
        )}
      </TouchableOpacity>

      {fullScreen && <Text style={styles.title}>{title}</Text>}
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
          Orientation.lockToPortrait();
        }}>
        <FastImage style={styles.goBack} source={goBack} />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute',
    zIndex: 99,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    padding: 15,
    width: '100%',
  },
  title: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500',
    opacity: 0.8,
  },
  volume: {
    width: 37,
    height: 37,
  },
  goBack: {
    width: 37,
    height: 37,
  },
});
