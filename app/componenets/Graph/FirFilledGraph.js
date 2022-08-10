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

let api_responsedata = [
  {
    data: [
      {Month: 'JAN', CMP: 53, fill: '#ff6b00'},
      {Month: 'FEB', CMP: 52, fill: '#ff6b00'},
      {Month: 'MAR', CMP: 69, fill: '#ff6b00'},
      {Month: 'APR', CMP: 92, fill: '#ff6b00'},
      {Month: 'MAY', CMP: 29, fill: '#ff6b00'},
      {Month: 'JUN', CMP: 104, fill: '#ff6b00'},
      {Month: 'JUL', CMP: 70, fill: '#ff6b00'},
    ],
  },
];

const data = api_responsedata[0].data;

//console.log(data);

export default function FirFilledGraph() {
  return (
    <>
      <Text style={Styles.FirFilledGraphTitle}>FIR - Filed</Text>
      <VictoryChart
        height={hp('39%')}
        width={wp('95%')}
        domainPadding={20}
        theme={VictoryTheme.material}>
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={<VictoryLabel dy={20} style={Styles.FirFilled} />}
        />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={
            <VictoryLabel
              dy={-30}
              domainPadding={15}
              style={Styles.FirFilled}
            />
          }
          /*label={"Number  of   Incidents"}*/
          fixLabelOverlap={true}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({datum}) => datum.fill,
              width: 15,
            },
          }}
          y="CMP"
          x="Month"
        />
      </VictoryChart>
    </>
  );
}

const Styles = StyleSheet.create({
  FirFilledGraphTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 24,
    marginLeft: 10,
    marginTop: 20,
  },
  FirFilled: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
});
