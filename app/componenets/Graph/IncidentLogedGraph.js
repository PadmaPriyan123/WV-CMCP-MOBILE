import React from "react";
import { StyleSheet, View, Text, LogBox, } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory-native";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

// get api connectivity


let api_response = [{
  "data": [
    { "Month": 'JAN', "CMP": 583, "fill": "#ff6b00" },
    { "Month": 'FEB', "CMP": 528, "fill": "#ff6b00" },
    { "Month": 'MAR', "CMP": 690, "fill": "#ff6b00" },
    { "Month": 'APR', "CMP": 902, "fill": "#ff6b00" },
    { "Month": 'MAY', "CMP": 219, "fill": "#ff6b00" },
    { "Month": 'JUN', "CMP": 704, "fill": "#ff6b00" },
    { "Month": 'JUL', "CMP": 409, "fill": "#ff6b00" },
  ]
}
];
// json_data = Object.keys(json_data).map(key => ({[key]: json_data[key]}));
const data = api_response[0].data;

//console.log(data);


export default function IncidentLogedGraph() {

  return (
    <>
      <Text style={Styles.IncidentLogedGraphTitle}>Incident Loged</Text>
      <VictoryChart height={250} width={340}
        domainPadding={20}
        theme={VictoryTheme.material} >
        <VictoryAxis /*label="Month"*/
          axisLabelComponent={<VictoryLabel dy={20} style={Styles.IncidentLoged}  />} />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={<VictoryLabel dy={-30} domainPadding={15} style={Styles.IncidentLoged}  />}
          /* label={"Number   of   Incidents"}*/
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
  IncidentLogedGraphTitle: {
    fontFamily: 'Lato-Bold',
    
    fontSize: 20,
    marginLeft: 10,
  },
  IncidentLoged:{
    fontSize: 12
  }
})

