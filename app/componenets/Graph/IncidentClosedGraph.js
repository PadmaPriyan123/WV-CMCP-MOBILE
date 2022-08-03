import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { VictoryPie } from 'victory-native';

const graphicColor = ['#ffffff','#ff6b00','#000000']; // Colors
const wantedGraphicData = [{ y: 10 }, { y: 50 }, { y: 40 }]; // Data that we want to display
const defaultGraphicData = [{ y: 0 }, { y: 0 }, { y: 100 }]; // Data used to make the animate prop work

export default function IncidentClosedGraph() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <View>
      <VictoryPie 
        animate={{ easing: 'exp' }}
        data={graphicData}
        width={250}
        height={250}
        colorScale={graphicColor}
        innerRadius={50}
      />
    </View>
  );
}
