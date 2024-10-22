import React, {useState} from "react"
import CartCard from "./CartCard"

function CartCardsArea() {

    return(
        <div className="w-[95%] h-[80%] mt-20 mb-4 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden scrollbar-none">
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
            <CartCard />
        </div>
        
    )
}

export default CartCardsArea