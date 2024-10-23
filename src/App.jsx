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

function App() {

  const [cartModal, setCartModal] = useState(false)
  const [addProductModal, setAddProductModal] = useState(false)
  const [productModal, setProductModal] = useState(false)

  return (
    <div className='w-screen max-h-screen h-screen bg-zinc-100 flex items-center flex-col overflow-y-hidden'>
      <CartContext.Provider value={[cartModal, setCartModal]}>
        <CartModal showModal={cartModal}/>
        <Header />
      </CartContext.Provider>

      <ProductContext.Provider value={[productModal, setProductModal]}>
        <ProductModalOverlay />
        <CardsArea />
      </ProductContext.Provider>

      <AddProductContext.Provider value={[addProductModal, setAddProductModal]}>
        <AddProductModal />
        <AddProductButton />
      </AddProductContext.Provider>
    </div>
  )
}

export default App
