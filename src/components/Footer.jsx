import { useFilters } from '../hooks/useFilters'
import './Footer.css'

export function Footer () {
    const {filters} = useFilters()
    return ( 
        <footer className='footer'>

            {
                JSON.stringify(filters, null,2)
            }
            {/* <h4>Prueba tecnica React</h4>
            <span>https://github.com/maatist</span>
            <h5>Carrito de compras useContext & useReducer</h5> */}
        </footer>
    )
}