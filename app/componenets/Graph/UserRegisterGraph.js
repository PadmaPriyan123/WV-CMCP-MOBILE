import React from "react";
import { StyleSheet, View, Text, LogBox, } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory-native";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// get api connectivity


let api_responsedata1 = [{
  "data": [
    { "State": 'Assam', "CMP": 340, "fill": "#ff6b00" },
    { "State": 'West Bengal', "CMP": 572, "fill": "#ff6b00" },
  ]
}
];
// json_data = Object.keys(json_data).map(key => ({[key]: json_data[key]}));
const data = api_responsedata1[0].data;

//console.log(data);


export default function UserRegisteredGraph() {

  return (
    <>
      <Text style={Styles.UserRegisteredGraphTitle}>Number of Users(Active)</Text>
      <VictoryChart height={250} width={340}
        domainPadding={50}
        theme={VictoryTheme.material} >
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={<VictoryLabel dy={20} style={Styles.UserRegistered} />} />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={<VictoryLabel dy={-32} domainPadding={15} style={Styles.UserRegistered} />}
          /*label={"Active Users"}*/
          fixLabelOverlap={true}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({ datum }) => datum.fill, width: 25
            }
          }}
          y="CMP" x="State" />
      </VictoryChart>
    </>
  );
}


const Styles = StyleSheet.create({
  UserRegisteredGraphTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  UserRegistered: {
    fontFamily: 'Lato-Regular',
    fontSize: 12
  }
})