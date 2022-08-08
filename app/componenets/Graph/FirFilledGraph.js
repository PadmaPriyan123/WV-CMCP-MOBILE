import React from "react";
import { StyleSheet, View, Text, LogBox} from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory-native";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// get api connectivity

let api_responsedata = [{
  "data": [
    { "Month": 'JAN', "CMP": 53, "fill": "#ff6b00" },
    { "Month": 'FEB', "CMP": 52, "fill": "#ff6b00" },
    { "Month": 'MAR', "CMP": 69, "fill": "#ff6b00" },
    { "Month": 'APR', "CMP": 92, "fill": "#ff6b00" },
    { "Month": 'MAY', "CMP": 29, "fill": "#ff6b00" },
    { "Month": 'JUN', "CMP": 104, "fill": "#ff6b00" },
    { "Month": 'JUL', "CMP": 70, "fill": "#ff6b00" },
  ]
}
];
// json_data = Object.keys(json_data).map(key => ({[key]: json_data[key]}));
const data = api_responsedata[0].data;

//console.log(data);


export default function FirFilledGraph() {

  return (
    <>
      <Text style = {Styles.FirFilledGraphTitle}>FIR - Completed</Text>
      <VictoryChart height={250} width={340}
        domainPadding={20}
        theme={VictoryTheme.material} >
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={<VictoryLabel dy={20} style={Styles.FirFilled} />} />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={<VictoryLabel dy={-30} domainPadding={15} style={Styles.FirFilled} />}
          /*label={"Number  of   Incidents"}*/
          fixLabelOverlap={true}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({ datum }) => datum.fill, width: 15
            }
          }}
          y="CMP" x="Month" />
      </VictoryChart>
    </>
  );
}


const Styles = StyleSheet.create({
  FirFilledGraphTitle: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 20,
  },
  FirFilled: {
    fontSize: 12
  }
})
