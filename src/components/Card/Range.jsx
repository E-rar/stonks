import './Range.scss'
import {useState,useContext} from 'react';


const Range = () => {
    const[rangeValue,setRangeValue]=useState([])
    function rangeSlide(value) {
        document.getElementById('rangeValue').innerHTML = value;
    }
    return ( 
        // <div>
        // <span id="rangeValue">0</span>
        // <Input class="range" type="range" name "" value="0" min="0" max="1000" onChange="rangeSlide(this.value)" onmousemove="rangeSlide(this.value)"></Input>
        // </div>
        <div>
            {/* <span id="rangeValue">{rangeValue}</span>
            <form action="">
                <input type="range" name="" className="range" value="0" min="0" max="365" 
                onChange={setRangeValue(value)} 
                onMousemove={setRangeValue(value)}/>
            </form> */}
        </div>   
     );
}
 
export default Range;