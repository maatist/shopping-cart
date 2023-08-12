import { useState, useId } from 'react'
import './Filters.css'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const { filters, setFilters } = useFilters()
  const [minPrice, setMinPrice] = useState(filters.minPrice)

  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  
  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
  }

  const handleChangeMinPriceApply = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: minPrice
    }))
  }

  const handleChangeCategory = (event) => {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className='filters'>

      <div>
        <label htmlFor={minPriceFilterId}>Precio</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          value={minPrice}
        />
        <span>${minPrice}</span>
        <span>
          <button onClick={handleChangeMinPriceApply}>
            Aplicar
          </button>
        </span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoria</label>
        <select id={categoryFilterId} onChange={handleChangeCategory} value={filters.category}>
          <option value='all'>Todas</option>
          <option value='laptops'>Notebooks</option>
          <option value='smartphones'>Celulares</option>
          <option value='home-decoration'>Decoracion de casa</option>
          <option value='motorcycle'>Motos</option>
        </select>
      </div>

    </section>
  )
}
