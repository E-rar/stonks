import React from 'react';
import ReactDOM from 'react-dom';
import { useEffect, useState,useContext } from 'react';
import { CoinContext } from '../../contexts/CoinContext'
import axios from 'axios'
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryArea } from 'victory';
  

  
  function LineChart() {
    const [prices,setPrices] = useState([]);
    const{current,setCurrent}=useContext(CoinContext)
    const{days,setDays}=useState('365')
    
    // const handleCurrent = ()=>{
    //   current==='0'?setCurrent({image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
    //    name: 'Bitcoin', 
    //    id: 'bitcoin'}):null;
    // }
    
    // ()=>handleCurrent();

    useEffect(()=>{
      axios.get(`https://api.coingecko.com/api/v3/coins/${current.id}/market_chart?vs_currency=eur&days=365&interval=daily`)
      // axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=eur&days=365&interval=daily`) 
      .then(res=>{
        setPrices(res.data);
        console.log(prices)
        
      })
      .catch(error=>console.log(error))
    },[current]);

    const renderPrices=prices.prices;
    let objectPrices=[]
    let i =0;

    const getObject=()=>{
    
    renderPrices.map(elt=>{
      
      objectPrices.push({x:new Date(renderPrices[i][0]),y:renderPrices[i][1]})
      console.log(elt, renderPrices)
      console.log(elt,current)
      i++;
    })
    // return objectPrices;
  }
  getObject();

    return (
      <VictoryChart 
        width={650} 
        height={300} 
        scale={{ x: 0 }}
        offsetY={150}
        padding={{ top: -40, bottom: 150, left: 220, right: 40 }}
      >
        <VictoryArea 
          data={objectPrices}
          style={{data: { fill: 'lightblue', stroke: 'teal' }}} 
        />
      </VictoryChart>
    );
  }
  
// ReactDOM.render(<LineChart/>, mountNode);
export default LineChart;