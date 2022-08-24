import React from 'react';
import {StyleSheet, View, Text, LogBox} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

let api_responsedata1 = [
  {
    data: [
      {State: 'Assam', CMP: 340, fill: '#46bb95'},
      {State: 'West Bengal', CMP: 572, fill: '#46bb95'},
    ],
  },
];

const data = api_responsedata1[0].data;

//console.log(data);

export default function UserRegisteredGraph() {
  return (
    <>
      <Text style={Styles.UserRegisteredGraphTitle}>
        Number of active users
      </Text>
      <VictoryChart
        height={hp('39%')}
        width={wp('95%')}
        domainPadding={50}
        theme={VictoryTheme.material}>
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={
            <VictoryLabel dy={20} style={Styles.UserRegistered} />
          }
        />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={
            <VictoryLabel
              dy={-32}
              domainPadding={15}
              style={Styles.UserRegistered}
            />
          }
          /*label={"Active Users"}*/
          fixLabelOverlap={true}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({datum}) => datum.fill,
              width: 25,
            },
          }}
          y="CMP"
          x="State"
        />
      </VictoryChart>
    </>
  );
}

const Styles = StyleSheet.create({
  UserRegisteredGraphTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
    color: '#46bb95',
  },
  UserRegistered: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
});
