import React from "react";
import { StyleSheet, View, Text, LogBox, } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory-native";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const data = [
  { Year: '2014', CMP: 15.6, label: "15.6%", fill: "#ff6b00" },
  { Year: '2014', CMP: 15.6, label: "15.6%", fill: "#ff6b00" },
  { Year: '2015', CMP: 39.9, label: "39.9%", fill: "#ff6b00" },
  { Year: '2016', CMP: 45.13, label: "45.13%", fill: "#ff6b00" },
  { Year: '2017', CMP: 21.69, label: "21.69%", fill: "#ff6b00" },
  { Year: '2018', CMP: 17.6, label: "17.6%", fill: "#ff6b00" },
  { Year: '2019', CMP: 16.5, label: "16.5%", fill: "#ff6b00" }
];

export default function IncidentLogedGraph() {

  return (
    <>
      <VictoryChart height={280} width={350}
        domainPadding={30}
        theme={VictoryTheme.material} >
        <VictoryAxis label="YEAR"
          axisLabelComponent={<VictoryLabel dy={25} />} />
        <VictoryAxis
          dependentAxis={true}
          axisLabelComponent={<VictoryLabel dy={-26} domainPadding={15} />}
          label={"Percentage  of  Affected  Peoples"}
          fixLabelOverlap={true}
        />
        <VictoryBar
          data={data}
          style={{
            data: {
              fill: ({ datum }) => datum.fill, width: 25
            }
          }}
          y="CMP" x="Year" />
      </VictoryChart>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: "center",
    color: "orange",
  },
  chart: {
    marginTop: -30,
  },
  content: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
  title: {
    borderWidth: 1,
    marginTop: 10,
    borderRadius: 7,
  },
  tablecontent: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
    width: 180
  },
  dastabletitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff"
  }
})