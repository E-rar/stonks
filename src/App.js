import './App.css';
import Crypto from './pages/Crypto/Crypto'
import Home from './pages/Home/Home'

import {
  BrowserRouter as 
  Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuth } from './contexts/AuthContext'

const App=()=> {
  // const { currentUser, appIsReady } = useAuth()
  // console.log('User:',currentUser)
  return (
    <Router>
    {/* {appIsReady && ( */}
    <div>   
      <Routes>

          {/* {currentUser && <Route exact path="/" element={<Home/>}/>}
          {!currentUser && <Route exact path="/" element={<Home/>}/>}
          
          {currentUser && <Route exact path="crypto" element={<Crypto/>}/>}
          {!currentUser && <Route exact path="crypto" element={<Home/>}/>} */}

          <Route path="/" element={<Home/>}/>
          {/* <Route path="/" element={<Home/>}/> */}
          
          <Route path="crypto" element={<Crypto/>}/>
          {/* <Route path="crypto" element={<Home/>}/> */}

      

      </Routes>
    </div>
    {/* )} */}
  </Router>

  );
}

export default App;
