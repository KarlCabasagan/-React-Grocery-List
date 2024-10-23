import React, {useState} from "react"
import CartCard from "./CartCard"

function CartCardsArea({cartItems}) {

    return(
        <div className="w-[95%] h-[80%] mt-20 mb-4 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden scrollbar-none">
            {cartItems.map(item => (
                <CartCard key={item.id} id={item.id} name={item.name} price={item.price} quantity={item.quantity} subtotal={item.subtotal} image={item.image} />
            ))}
        </div>
        
    )
}

export default CartCardsArea