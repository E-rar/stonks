import './Table.scss'

const Table = (props) => {
    return ( 
    <table>
         <thead>
            <tr>
                <td colSpan="1"></td>
                <td>(24h)</td>
                <td>Scale Range</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Price (€)</td>
                <td>{props.value} </td>  
                <td>{props.price7d}</td>
            </tr>
            <tr>
            <td>Change (%)</td>
            <td style={{ color: props.percent24h<'0' ? "#F63535":"#00FF00"}}>{props.percent24h}</td>
            <td>{props.percent7d}</td>
            </tr>
        </tbody>

    </table> );
}
 
export default Table;