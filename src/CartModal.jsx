import { useContext, useState } from "react"
import { CartContext } from "./App"
import CartHeader from "./CartHeader"
import CartCardsArea from "./CartCardsArea"
import CartTotal from "./CartTotal"

function CartModal(props) {

    const [cartModal, setCartModal] = useContext(CartContext)

    return(
        <div className={(cartModal ? "z-40 opacity-100" : "opacity-0 z-[-1]") + " w-screen h-screen max-h-screen flex flex-col items-center bg-zinc-100 fixed transition ease-in-out duration-200"}>
            <CartHeader />
            <CartCardsArea />
            <CartTotal />
        </div>
    )
}

export default CartModal