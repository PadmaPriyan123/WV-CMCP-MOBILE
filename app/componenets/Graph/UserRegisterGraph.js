import React from "react";
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

import { VictoryLine, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryScatter } from "victory-native";


export default function UserRegisterGraph() {

    return (
            <VictoryChart height={280} width={350}
            domainPadding={30}
      theme={VictoryTheme.material}>
        <VictoryAxis label="YEAR"
                axisLabelComponent={<VictoryLabel dy={25} />} />
              <VictoryAxis
                dependentAxis={true}
                axisLabelComponent={<VictoryLabel dy={-26} domainPadding={15} />}
                label={"Percentage  of  Affected  Peoples"}
                fixLabelOverlap={true}
              />
                <VictoryLine
                    style={{
                        data: { stroke: "#F37021" },
                        parent: { border: "1px solid #orange" },
                    }}
                    data={[
                        { x: 1, y: 2 },
                        { x: 2, y: 3 },
                        { x: 3, y: 5 },
                        { x: 4, y: 4 },
                        { x: 5, y: 7 }
                    ]}
                />
            </VictoryChart >
            );
}
