import { useContext, useEffect, useState } from "react"
import { CartContext } from "./App"
import CartHeader from "./CartHeader"
import CartCardsArea from "./CartCardsArea"
import CartTotal from "./CartTotal"

function CartModal({cartItems}) {

    const [cartModal, setCartModal] = useContext(CartContext)

    const total = cartItems.reduce((acc, item) => acc + item.subtotal, 0)

    return(
        <div className={(cartModal ? "z-40 opacity-100" : "opacity-0 z-[-1]") + " w-screen h-screen max-h-screen flex flex-col items-center bg-zinc-100 fixed transition ease-in-out duration-200"}>
            <CartHeader />
            <CartCardsArea cartItems={cartItems} />
            <CartTotal total={total} />
        </div>
    )
}

export default CartModal