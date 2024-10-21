import { useContext, useState } from "react"
import { CartContext } from "./App"

function CartModal(props) {

    const [cartModal, setCartModal] = useContext(CartContext)

    return(
        <div onClick={() => setCartModal(!cartModal)} className={(cartModal ? "opacity-55 z-50" : "z-[-1] opacity-0") + " w-screen h-screen bg-zinc-900 absolute transition ease-in-out duration-100"}>
        </div>
    )
}

export default CartModal