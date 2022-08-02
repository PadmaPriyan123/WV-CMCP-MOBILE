import React from "react";
import { StyleSheet, View, Text, LogBox, } from "react-native";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory-native";
import { DataTable } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();

const data = [
  { Year: '2014', CMP: 15.6, label: "15.6%", fill: "green" },
  { Year: '2015', CMP: 39.9, label: "39.9%", fill: "maroon" },
  { Year: '2016', CMP: 45.13, label: "45.13%", fill: "red" },
  { Year: '2017', CMP: 21.69, label: "21.69%", fill: "teal" },
  { Year: '2018', CMP: 17.6, label: "17.6%", fill: "orange" },
  { Year: '2019', CMP: 16.5, label: "16.5%", fill: "purple" }
];

export default function DashboardScreen() {

  return (
    <>
      <ScrollView style={{backgroundColor:'#fff'}}>
        <View style={styles.container}>
          
          <Text style={styles.header}>Case Management Report</Text>
          <View style={styles.chart}>
            <VictoryChart height={280} width={390}
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
                events={ [{ target: 'data', eventHandlers: { onPress: (evt, context, index) => 
                  { 
                    // console.log(context.data);
                    // alert(index);
                    //Year = context.data[index].Year;
                    //CMP = context.data[index].CMP;
                    alert(index); 
                  }, }, }] } 
                y="CMP" x="Year" />
            </VictoryChart>
            <View>
              <Text style={styles.content}> % - West Bengal and Assam Combined </Text>
            </View>
            {/*<ScrollView>*/}
            <DataTable style={styles.title}>
              <DataTable.Header style={{backgroundColor:'#00bad7',borderRadius: 6,borderBottomLeftRadius:2,borderBottomEndRadius:2 }}>
                <DataTable.Title textStyle={styles.tablecontent}>Incident Name</DataTable.Title>
                <DataTable.Title numeric textStyle={styles.dastabletitle}>2017</DataTable.Title>
                <DataTable.Title numeric textStyle={styles.dastabletitle}>2018</DataTable.Title>
                <DataTable.Title numeric textStyle={styles.dastabletitle}>2019</DataTable.Title>
              </DataTable.Header>

              <DataTable.Row style={{backgroundColor:'#e9ecef',}} >
                <DataTable.Cell >FCV</DataTable.Cell>
                <DataTable.Cell numeric>5587</DataTable.Cell>
                <DataTable.Cell numeric>4505</DataTable.Cell>
                <DataTable.Cell numeric>204</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={{backgroundColor:'#e9ecef'}}>
                <DataTable.Cell>KAG</DataTable.Cell>
                <DataTable.Cell numeric>11778</DataTable.Cell>
                <DataTable.Cell numeric>14157</DataTable.Cell>
                <DataTable.Cell numeric>6449</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={{backgroundColor:'#e9ecef'}}>
                <DataTable.Cell>POCSO</DataTable.Cell>
                <DataTable.Cell numeric>3253</DataTable.Cell>
                <DataTable.Cell numeric>3988</DataTable.Cell>
                <DataTable.Cell numeric>4016</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={{backgroundColor:'#e9ecef'}}>
                <DataTable.Cell>POMG</DataTable.Cell>
                <DataTable.Cell numeric>1390</DataTable.Cell>
                <DataTable.Cell numeric>1201</DataTable.Cell>
                <DataTable.Cell numeric>1507</DataTable.Cell>
              </DataTable.Row>

              <DataTable.Row style={{backgroundColor:'#e9ecef',borderRadius: 6, }}>
                <DataTable.Cell>MG</DataTable.Cell>
                <DataTable.Cell numeric>6887</DataTable.Cell>
                <DataTable.Cell numeric>7691</DataTable.Cell>
                <DataTable.Cell numeric>7356</DataTable.Cell>
              </DataTable.Row>

            </DataTable>
            {/*</ScrollView>*/}
          </View>
        </View>
        
      </ScrollView>
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
  borderRadius:7,
  
  
    
  
  },
  tablecontent:{
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
     width: 180
 },
 dastabletitle:{
  fontSize: 14, 
  fontWeight: "bold",
   color: "#fff"
 }
})