import { useState,createContext,useEffect } from 'react';

export const CoinContext=createContext()

const CoinContextProvider = ({children}) => {
    const [current, setCurrent] = useState('')

    return ( 
    <CoinContext.Provider value={{current,setCurrent}}>
        {children}
    </CoinContext.Provider>
     );
}
 
export default CoinContextProvider;