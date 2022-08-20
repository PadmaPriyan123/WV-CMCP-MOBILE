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

// get api connectivity

let api_response = [
  {
    data: [
      {Month: 'JAN', CMP: 583, fill: '#00acca'},
      {Month: 'FEB', CMP: 528, fill: '#00acca'},
      {Month: 'MAR', CMP: 690, fill: '#00acca'},
      {Month: 'APR', CMP: 902, fill: '#00acca'},
      {Month: 'MAY', CMP: 219, fill: '#00acca'},
      {Month: 'JUN', CMP: 704, fill: '#00acca'},
      {Month: 'JUL', CMP: 409, fill: '#00acca'},
    ],
  },
];

const data = api_response[0].data;

//console.log(data);

export default function IncidentLogedGraph() {
  return (
    <>
      <Text style={Styles.IncidentLogedGraphTitle}>Incident logged</Text>
      <VictoryChart
        height={hp('39%')}
        width={wp('95%')}
        domainPadding={20}
        theme={VictoryTheme.material}>
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={
            <VictoryLabel dy={20} style={Styles.IncidentLoged} />
          }
        />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={
            <VictoryLabel
              dy={-30}
              domainPadding={15}
              style={Styles.IncidentLoged}
            />
          }
          /* label={"Number   of   Incidents"}*/
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
  IncidentLogedGraphTitle: {
    fontFamily: 'Lato-Bold',
    color: '#00acca',
    fontSize: 24,
    marginLeft: 10,
  },
  IncidentLoged: {
    fontSize: 12,
  },
});
