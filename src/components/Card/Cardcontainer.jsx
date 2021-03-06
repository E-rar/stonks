import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import Card from './Card';
import CardDescription from './CardDescription';
import LineChart from './Line.jsx'
import Table from './Table'
import Range from './Range'
import { CoinContext } from '../../contexts/CoinContext'

const Cardcontainer = () => {
    const [stock, setStock] = useState([])
    const{current,setCurrent,current7,setCurrent7}=useContext(CoinContext)
    
   useEffect(()=>{
     axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false')
     .then(res=>{
       setStock(res.data);
     })
     .catch(error=>console.log(error))
   },[]);
    return (
      <div className="more">
        
        {/* <form action="">
          <input type="search" name="search" id="search" placeholder='Suche...' />
        </form> */}
        <div className="CardContainer">
        {stock.map((elt)=>
      
        <Card key={elt.id} 
        name={elt.name}
        short={elt.symbol.toUpperCase()} 
        value={`${elt.market_cap_change_percentage_24h} %`}
        price={`${elt.current_price} €`}
        symbol={elt.image}
        target={{image:elt.image,
                name:elt.name,
                id:elt.id,
              price:elt.current_price,
            percentage24:elt.market_cap_change_percentage_24h}} 
        />
    
        )}
      </div>
      <div className="dataCard">
          <div className="imgWrapper">
      
          <div className="ImgContainer">
            <img src={current.image} alt=""  className="turningImg"/>
          </div>
          <Range/>
          {/* //=====================Table============ */}
          {/* <Table value={current.price} 
          percent24h={current.percentage24.toFixed(2)}
          price7d={current7?.toFixed(2)}
          percent7d={(current7/current.price).toFixed(2)}/> */}
   
          {/* //=====================Table============ */}
          </div>
          <div className="headline">
          <h1>
            {current.name}
          </h1>
          <CardDescription/>
          <LineChart/>
          
          </div>
          
        </div>
      </div>
      );
}
 
export default Cardcontainer;