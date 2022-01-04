import { useEffect, useState,useContext } from 'react';
import { CoinContext } from '../../contexts/CoinContext'

const CoinInfo = () => {
    const{current,setCurrent}=useContext(CoinContext)
    return ( 
        <h1>
            {current}
        </h1>
     );
}
 
export default CoinInfo;