import { createContext, useEffect, useState } from 'react'
import Header from "./Header.jsx"
import CardsArea from "./CardsArea.jsx"
import CartModal from './CartModal.jsx'
import AddProductButton from './AddProductButton.jsx'
import AddProductModal from './AddProductModal.jsx'
import ProductModalOverlay from './ProductModalOverlay.jsx'

export const CartContext = createContext(false)
export const AddProductContext = createContext(false)
export const ProductContext = createContext(false)

export const ProductDataContext = createContext(null)
export const UniqueIdContext = createContext(null)

function App() {

  const [cartModal, setCartModal] = useState(false)
  const [addProductModal, setAddProductModal] = useState(false)
  const [productModal, setProductModal] = useState(false)

  const [uniqueId, setUniqueId] = useState(0)
  const [products, setProducts] = useState([])

  return (
    <div className='w-screen max-h-screen h-screen bg-zinc-100 flex items-center flex-col overflow-y-hidden'>
      <CartContext.Provider value={[cartModal, setCartModal]}>
        <CartModal showModal={cartModal}/>
        <Header />
      </CartContext.Provider>

      <ProductContext.Provider value={[productModal, setProductModal]}>
        <ProductModalOverlay />
        <CardsArea productsData={products} />
      </ProductContext.Provider>

      <AddProductContext.Provider value={[addProductModal, setAddProductModal]}>
        <ProductDataContext.Provider value={[products, setProducts]}>
          <UniqueIdContext.Provider value={[uniqueId, setUniqueId]}>
            <AddProductModal />
            <AddProductButton />
          </UniqueIdContext.Provider>
        </ProductDataContext.Provider>
      </AddProductContext.Provider>
    </div>
  )
}

export default App
