import { useEffect, useState } from 'react'
import { Products } from './components/Products'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { IS_DEVELOPMENT } from './config.JS'
import { useFilters } from './hooks/useFilters'
import { Cart } from './components/Cart'
import { CartProvider } from './context/cart'

function App () {

  const [isLoading, setIsLoading] = useState(true)
  const [productos, setProductos] = useState(null)

  const {filterProducts} = useFilters()

   useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20&skip=0')
    .then(response => response.json())
    .then(products => {
      setProductos(products.products)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) { // ⬅️ si está cargando, mostramos un texto que lo indique
    return (
      <div className="App">
        <h1>Cargando...</h1>
      </div>
    );
  }
  else {
    const filteredProducts = filterProducts(productos)   
      return (
        <CartProvider>
          <Header />
          <Cart />
          <Products products={filteredProducts} />
          {IS_DEVELOPMENT && <Footer />}
    
        </CartProvider>
      )  
  }
}

export default App
