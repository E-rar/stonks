import { useEffect, useState,useContext } from 'react';
import axios from 'axios';
import { CoinContext } from '../../contexts/CoinContext'




  const CardDescripton = () => {
    const [coin, setCoin] = useState([]);
    const{current,setCurrent}=useContext(CoinContext);

    useEffect(()=>{
        axios.get(`https://api.coingecko.com/api/v3/coins/${current.id}`)
        .then(res=>{
          setCoin(res.data.description);
          console.log(current);
        })
        .catch(error=>console.log(error))
      },[current]);

      return (
      <article className="Description">
        <p>
          {coin.de}
        </p>
      </article> );
  }
   
  export default CardDescripton;