import { useEffect, useState,useContext } from 'react';
import './Card.scss'
import { CoinContext } from '../../contexts/CoinContext'



const Card = (props) => {
    const{current,setCurrent}=useContext(CoinContext)
    return ( 
        <div className="card" onClick={()=>setCurrent(props.target)}>
            <img src={props.symbol} alt="" />
            <div className="cryptInfo">
                <h2>{props.name}</h2>
                <h3>{props.short}</h3>
            </div>
            <div className="cryptValue">
                <h4 style={{ color: props.value[0]==='-' ? "#F63535":"#00FF00"}}>{props.value}</h4>
                <h4 className='price'>{props.price}</h4>
            </div>
         
            
        </div>
     );
}
 
export default Card;