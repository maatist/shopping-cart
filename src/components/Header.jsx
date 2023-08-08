import {Filters} from './Filters.jsx'

export function Header ({changeFilters}) {
    return (
        <header>
            <h1>Tienda en React</h1>

            <Filters onChange = {changeFilters} />
        </header>
    )
}