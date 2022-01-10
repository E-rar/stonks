import { useState,createContext,useEffect } from 'react';

export const CoinContext=createContext()

const CoinContextProvider = ({children}) => {
    const [current, setCurrent] = useState({image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579', name: 'Bitcoin', id: 'bitcoin'});
    const[currentName,setCurrentName] = useState('')
    const[current7,setCurrent7]=useState('')


    return ( 
    <CoinContext.Provider value={{current,setCurrent,currentName,setCurrentName,current7,setCurrent7}}>
        {children}
    </CoinContext.Provider>
     );
}
 
export default CoinContextProvider;