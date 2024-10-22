import { createContext, useState } from 'react'
import Header from "./Header.jsx"
import CardsArea from "./CardsArea.jsx"
import CartModal from './CartModal.jsx'

export const CartContext = createContext(false)

function App() {

  const [cartModal, setCartModal] = useState(false)

  return (
    <div className='w-screen max-h-screen h-screen bg-zinc-100 flex items-center flex-col overflow-y-hidden'>
      <CartContext.Provider value={[cartModal, setCartModal]}>
        <CartModal showModal={cartModal}/>
        <Header />
      </CartContext.Provider>
      <CardsArea />
    </div>
  )
}

export default App
