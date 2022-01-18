import './Home.scss'
import Login from '../../components/Login/Login'
import Animation from '../../components/Animation/Animation'
const Home = () => {

    return ( 
        <div>
            <h1>Hallo</h1>
            <Login/>
            <Animation/>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,128L288,288L576,128L864,224L1152,160L1440,32L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
        </div>
     );
}
 
export default Home;