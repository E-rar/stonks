import {Line} from 'react-chartjs-2';
import { useEffect, useState,useContext } from 'react';
import { CoinContext } from '../../contexts/CoinContext'

// const LineChart = () => {
//     const{current,setCurrent}=useContext(CoinContext)
//     const data = {
//         labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Oct","Nov","Dez"],
//         datasets: [
//           {
//             label: {current},
//             data: [33, 53, 85, 41, 44, 65],
//             fill: true,
//             backgroundColor: "linear-gradient(90deg, rgba(255,255,255,1) 19%, rgba(255,255,255,0.15449929971988796) 30%, rgba(255,255,255,0) 56%)",
//             borderColor: "#000"
//           },
//           {
//             label: "Second dataset",
//             data: [33, 25, 35, 51, 54, 76],
//             fill: false,
//             borderColor: "#742774"
//           }
//         ]
//       };
//     return ( <div className="App">
//             <Line data={data} />
//             </div> );
// }
 
// export default LineChart;


  const LineChart = () => {
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)"
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774"
          }
        ]
      };
      
      
        return (
          <div className="App">
            <Line data={data} />
          </div>
        );
      }
   
  export default LineChart;