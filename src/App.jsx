import { createContext, useEffect, useState } from 'react'
import Header from "./Header.jsx"
import CardsArea from "./CardsArea.jsx"
import CartModal from './CartModal.jsx'
import AddProductButton from './AddProductButton.jsx'

export const CartContext = createContext(false)
export const AddProductContext = createContext(false)

function App() {

  const [cartModal, setCartModal] = useState(false)
  const [addProductModal, setAddProductModal] = useState(false)

  return (
    <div className='w-screen max-h-screen h-screen bg-zinc-100 flex items-center flex-col overflow-y-hidden'>
      <CartContext.Provider value={[cartModal, setCartModal]}>
        <CartModal showModal={cartModal}/>
        <Header />
      </CartContext.Provider>
      <CardsArea />
      <AddProductContext.Provider value={[addProductModal, setAddProductModal]}>
        <AddProductButton />
      </AddProductContext.Provider>
    </div>
  )
}

export default App
