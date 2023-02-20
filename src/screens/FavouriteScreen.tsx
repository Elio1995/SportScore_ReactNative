import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {EventsLive} from '../types';

const FavouriteScreen = (props: any) => {
  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      {props.favourites?.length === 0 ? (
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            alignSelf: 'center',
            marginTop: 20,
          }}>
          There is no favourite match yet.
        </Text>
      ) : (
        props.favourites?.map((favourite: EventsLive, index: any) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              width: '100%',
              paddingHorizontal: 20,
              paddingVertical: 12,
              borderBottomWidth: 2,
              borderBottomColor: 'black',
              backgroundColor: '#16181d',
            }}>
            <TouchableOpacity
              onPress={() => props.deleteToFavorite(favourite?.id)}
              style={{width: 40, justifyContent: 'center'}}>
              <Icon name="star-outline" size={20} color="white" />
            </TouchableOpacity>
            <View style={{width: 180}}>
              <Text style={{color: 'white'}}>{favourite?.home_team?.name}</Text>
              <Text style={{color: 'white'}}>{favourite?.away_team?.name}</Text>
            </View>
            {/* <TouchableOpacity
         style={{width: 55, justifyContent: 'center'}}
         onPress={() => navigation.navigate('VideoPlayer')}>
         <Icon name="tv-outline" size={30} color="white" />
       </TouchableOpacity> */}
            <View style={{width: 80}}>
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'flex-end',
                }}>
                {favourite?.home_score?.current}:
                {favourite?.away_score?.current}
              </Text>
              <Text style={{color: 'white', alignSelf: 'flex-end'}}>
                {favourite?.status_more}
              </Text>
            </View>
          </View>
        ))
      )}
    </View>
  );
};

export default FavouriteScreen;
