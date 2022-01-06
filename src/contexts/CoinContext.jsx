import { useState,createContext,useEffect } from 'react';

export const CoinContext=createContext()

const CoinContextProvider = ({children}) => {
    const [current, setCurrent] = useState('');
    const[currentName,setCurrentName] = useState('')


    return ( 
    <CoinContext.Provider value={{current,setCurrent,currentName,setCurrentName}}>
        {children}
    </CoinContext.Provider>
     );
}
 
export default CoinContextProvider;