import './Table.scss'

const Table = (props) => {
    return ( 
    <table>
        {/* <th>
                
                
                
        </th> */}
        <tr>
            <td>Preis</td>
            <td>{props.value} €</td>    
        </tr>
        <tr>
            <td>24h%</td>
            <td style={{ color: props.percent24h<'0' ? "#F63535":"#00FF00"}}>{props.percent24h} %</td>
        </tr>
        <tr>
            <td>price(7d)</td>
            <td>{props.price7d}€</td>
        </tr>
        <tr>
            <td>7d%</td>
            <td>{props.percent7d}%</td>
        </tr>

    </table> );
}
 
export default Table;