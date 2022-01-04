import './Crypto.scss';
import Cardcontainer from '../../components/Card/Cardcontainer.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import CoinInfo from '../../components/CoinInfo/CoinInfo.jsx'
const Crypto = () => {
    return ( 
        <div className="bg">
        <Navbar/>
        <CoinInfo/>
        <Cardcontainer/>
        </div> 
    );
}
 
export default Crypto;