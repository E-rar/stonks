import logo from '../../img/MountStonk.png';
import './Navbar.scss'

const Navbar = () => {
    return ( 
        <nav>
            <div className="NavContent">
            <img src={logo} alt="" />  
            </div>
            
        </nav>
     );
}
 
export default Navbar;