import React from 'react';
import ReactDOM from 'react-dom';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryArea } from 'victory';

  function LineChart() {
    const data = [
      { x: new Date(2021, 5, 1), y: 8 },
      { x: new Date(2021, 5, 2), y: 10 },
      { x: new Date(2021, 5, 3), y: 7 },
      { x: new Date(2021, 5, 4), y: 4 },
      { x: new Date(2021, 5, 7), y: 6 },
      { x: new Date(2021, 5, 8), y: 3 },
      { x: new Date(2021, 5, 9), y: 7 },
      { x: new Date(2021, 5, 10), y: 9 },
      { x: new Date(2021, 5, 11), y: 6 }
    ];
  
    // scaleDiscontinuous and discontinuitySkipWeekends are both
    // plugins imported from @d3fc/d3fc-discontinuous-scale
    // const discontinuousScale = scaleDiscontinuous(
    //   d3Scale.scaleTime()
    // ).discontinuityProvider(discontinuitySkipWeekends());
  
    return (
      <VictoryChart 
        width={650} 
        height={300} 
        scale={{ x: 0 }}
        padding={{ top: -40, bottom: 150, left: 20, right: 40 }}
      >
        <VictoryArea 
          data={data} 
          style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
        />
      </VictoryChart>
    );
  }
  
// ReactDOM.render(<LineChart/>, mountNode);
export default LineChart;