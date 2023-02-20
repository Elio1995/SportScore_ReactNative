import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {EventsLive} from '../../types';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

type EventItemProps = {
  event: EventsLive;
};

const EventItem = ({event}: EventItemProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        backgroundColor: '#16181d',
      }}>
      <TouchableOpacity style={{width: 40, justifyContent: 'center'}}>
        <Icon name="star-outline" size={20} color="white" />
      </TouchableOpacity>
      <View style={{width: 180}}>
        <Text style={{color: 'white'}}>{event?.home_team?.name}</Text>
        <Text style={{color: 'white'}}>{event?.away_team?.name}</Text>
      </View>
      <TouchableOpacity
        style={{width: 55, justifyContent: 'center'}}
        onPress={() => navigation.navigate('VideoPlayer')}>
        <Icon name="tv-outline" size={30} color="white" />
      </TouchableOpacity>
      <View style={{width: 80}}>
        <Text
          style={{
            color: 'white',
            alignSelf: 'flex-end',
          }}>
          {event?.home_score?.current}:{event?.away_score?.current}
        </Text>
        <Text style={{color: 'white', alignSelf: 'flex-end'}}>
          {event.status_more}
        </Text>
      </View>
    </View>
  );
};

function eventPropsAreEqual(prevEvent: EventsLive, nextEvent: EventsLive) {
  return (
    prevEvent?.home_team?.name === nextEvent?.home_team?.name &&
    prevEvent?.away_team?.name === nextEvent?.away_team?.name &&
    prevEvent?.home_score?.current === nextEvent?.home_score?.current &&
    prevEvent?.away_score?.current === nextEvent?.away_score?.current &&
    prevEvent?.status_more === nextEvent?.status_more
  );
}

export default React.memo(EventItem, eventPropsAreEqual);
