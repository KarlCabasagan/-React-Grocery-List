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

export const CartProductDataContext = createContext(null)

export const ProductIdContext = createContext(null)

function App() {

  const [cartModal, setCartModal] = useState(false)
  const [addProductModal, setAddProductModal] = useState(false)
  const [productModal, setProductModal] = useState(false)

  const [uniqueId, setUniqueId] = useState(0)
  const [products, setProducts] = useState([])

  const [cartItems, setCartItems] = useState([{id: 1, name: "Jollibee", price: 100.00, quantity: 1, subtotal: 100.00, image: "images/test.jpg"}, {id: 2, name: "Mc Donalds", price: 200.00, quantity: 1, subtotal: 200.00, image: "images/Toblerone.jpg"}])

  const [productId, setProductId] = useState(null)

  return (
    <div className='w-screen max-h-screen h-screen bg-zinc-100 flex items-center flex-col overflow-y-hidden'>
      <ProductDataContext.Provider value={[products, setProducts]}>
        <CartContext.Provider value={[cartModal, setCartModal]}>
          <CartProductDataContext.Provider value={[cartItems, setCartItems]} >
            <CartModal cartItems={cartItems} />
            <Header />
          </CartProductDataContext.Provider>
        </CartContext.Provider>

        <ProductContext.Provider value={[productModal, setProductModal]}>
          <ProductIdContext.Provider value={[productId, setProductId]}>
            <ProductModalOverlay productData={products.filter(product => product.id === productId)}/>
            <CardsArea productsData={products} />
          </ProductIdContext.Provider>
        </ProductContext.Provider>

        <AddProductContext.Provider value={[addProductModal, setAddProductModal]}>
            <UniqueIdContext.Provider value={[uniqueId, setUniqueId]}>
              <AddProductModal />
              <AddProductButton />
            </UniqueIdContext.Provider>
        </AddProductContext.Provider>
      </ProductDataContext.Provider>
    </div>
  )
}

export default App
