import React, {useCallback, useState} from 'react';
import {useWindowDimensions, StyleSheet} from 'react-native';

import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Victim from './IncidentLog/victim';
import Complaints from './IncidentLog/complaint';
import Legal from './legal';
import Service from './service';
import Mhpss from './mhpss';
const FirstRoute = ({route}) => {
  return (
    <>
      <Victim />
    </>
  );
};

const SecondRoute = ({route}) => {
  return (
    <>
      <Complaints />
    </>
  );
};
const ThirdRoute = ({route}) => {
  return (
    <>
      <Legal />
    </>
  );
};
const FourthRoute = () => {
  return (
    <>
      <Service />
    </>
  );
};
const FivthRoute = () => {
  return (
    <>
    <Mhpss/>
    </>
  );
};

export default function TabViewExample() {
  const layout = useWindowDimensions();
 
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'VICTIMS', change: () => setIndex(1)},
    {key: 'second', title: 'COMPLAINTS', change: () => setIndex(2)},
     // {key: 'third', title: 'LEGAL', change: () => setIndex(3)},
     //{key: 'fourth', title: 'SERVICES', change: () => setIndex(Login)},
         // {key: 'fivth', title: 'MHPSS', change: () => setIndex()},

 

  ]);

  

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
    fourth: FourthRoute,
    fivth: FivthRoute,

  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      activeColor={'#f37e20'}
      inactiveColor={'gray'}
      indicatorStyle={{
        backgroundColor: '#f37e20',

        borderColor: '#ccc',
        fontSize: 16,
        marginLeft: 5,
      }}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: -10,
        backgroundColor: '#fff',
        margin: 'auto',

        borderWidth: 0.5,
        borderColor: '#f2f7fa',
        top: 10,
      }}
      labelStyle={{fontSize: 9, fontFamily: 'Lato-Bold'}}
    />
  );
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={{width: layout.width}}
      style={{backgroundColor: '#fff'}}></TabView>
  );
}
