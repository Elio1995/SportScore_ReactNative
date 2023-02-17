import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {useLazyGetLiveEventsQuery} from '../Redux/endpoints/endpoint';
import {EventsLive} from '../types';
import Icon from 'react-native-vector-icons/Ionicons';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import Orientation from 'react-native-orientation-lockers';

const ViewMainHeader = styled.View`
  flex-direction: row;
  height: 10%
  background-color: #16181d;

`;

const TextStyle = styled.Text`
  color: white;
  font-weight: 700;
  font-size: 20px;
`;

const LiveScreen = () => {
  const navigation = useNavigation();
  const [getLiveEvents, eventResult] = useLazyGetLiveEventsQuery();

  useEffect(() => {
    getLiveEvents(undefined);
    Orientation.lockToPortrait();
  }, []);

  const events = eventResult?.data?.data;

  const footballLiveGames = events?.filter((event: EventsLive) => {
    return event.sport.name === 'Football';
  });

  console.log('foot', footballLiveGames);
  return (
    <View style={{height: '100%', backgroundColor: 'black'}}>
      <ViewMainHeader
        style={{
          borderBottomWidth: 5,
          borderBottomColor: 'black',
          backgroundColor: '#16181d',
          justifyContent: 'center',
          paddingTop: 15,
        }}>
        <View>
          <TextStyle>Football Live Matches</TextStyle>
        </View>
      </ViewMainHeader>
      <ScrollView>
        {eventResult.isLoading ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator
              style={{
                width: 70,
                height: 70,
              }}
              size="large"
              color="#ffffff"
            />
          </View>
        ) : (
          <>
            {footballLiveGames?.map((event: EventsLive, index: any) => {
              return (
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
                  <View style={{width: 40, justifyContent: 'center'}}>
                    <Icon name="star-outline" size={20} color="white" />
                  </View>
                  <View style={{width: 180}}>
                    <Text style={{color: 'white'}}>
                      {event?.home_team?.name}
                    </Text>
                    <Text style={{color: 'white'}}>
                      {event?.away_team?.name}
                    </Text>
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
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

export default LiveScreen;
