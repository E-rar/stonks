import './Crypto.scss';
import Cardcontainer from '../../components/Card/Cardcontainer.jsx'
import Navbar from '../../components/Navbar/Navbar.jsx'
import CoinInfo from '../../components/CoinInfo/CoinInfo.jsx'
import CoinImage from '../../components/CoinInfo/CoinImage'
const Crypto = () => {
    return ( 
        <div className="bg">
        <Navbar/>
        <div className="flex">
        <Cardcontainer/>
        </div>
        
        </div> 
    );
}
 
export default Crypto;