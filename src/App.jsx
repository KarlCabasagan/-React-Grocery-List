import { createContext, useState } from 'react'
import Header from "./Header.jsx"
import Cards from "./CardsArea.jsx"
import CartModal from './CartModal.jsx'

export const CartContext = createContext(false)

function App() {

  const [cartModal, setCartModal] = useState(false)

  return (
    <div className='flex items-center flex-col'>
      <CartContext.Provider value={[cartModal, setCartModal]}>
        <CartModal showModal={cartModal}/>
        <Header />
      </CartContext.Provider>
      <Cards />
    </div>
  )
}

export default App
