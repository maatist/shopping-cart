import { useState } from "react"
import { Products } from "./components/Products"
import { products as initialProducts} from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { IS_DEVELOPMENT } from "./config.JS"

function useFilters() {

  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          filters.category == 'all' ||
          product.category == filters.category
        )
      )
    })
  }

  return {filterProducts, setFilters, filters}
}

function App() {
  
  const [products] = useState(initialProducts)
  const {filterProducts, setFilters, filters} = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <>
      <Header changeFilters = {setFilters} />
      <Products products={filteredProducts}/>
      {IS_DEVELOPMENT && <Footer filters={filters} />}
      
    </>
  )
}

export default App
