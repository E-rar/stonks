import { useEffect, useState,useContext } from 'react';
import { CoinContext } from '../../contexts/CoinContext'
import{axios} from 'axios'
import {Line} from 'react-chartjs-2';

const CoinInfo = () => {
    const [graph, setGraph] = useState([])
    const{current,setCurrent}=useContext(CoinContext)
    const state = {
      labels: ['January', 'February', 'March',
               'April', 'May'],
      datasets: [
        {
          label: 'Rainfall',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56]
        }
      ]
    }
    return (
      <div>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
 
export default CoinInfo;