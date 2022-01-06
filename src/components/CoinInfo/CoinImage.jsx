import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { CoinContext } from '../../contexts/CoinContext'

const CoinImage = () => {
    const [coin, setCoin] = useState([])
    const{current,setCurrent}=useContext(CoinContext)

   useEffect(()=>{
     axios.get(`https://api.coingecko.com/api/v3/coins/${current.toLowerCase()}`)
     .then(res=>{
       setCoin(res.data);
     })
     .catch(error=>console.log(error))
   },[]);

    return ( 
    <div className="CoinImageContainer">
        <img src={coin.image[2]} alt="" className="CoinImage" />
    </div> );
}
 
export default CoinImage;