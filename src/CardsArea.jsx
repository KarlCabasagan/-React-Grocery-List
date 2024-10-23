import React, {useState} from "react"
import Card from "./Card";

function CardsArea({productsData}) {

    return(
        <div className="w-[95%] max-h-full mt-20 mb-4 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden scrollbar-none">
            {productsData.map(product => (
                <Card key={product.id} id={product.id} name={product.name} price={product.price} image={product.image}/>
            ))}
            {/* <div className="w-full flex justify-center mt-14">
                <h1 className="text-zinc-600">This is as far as it goes..</h1>
            </div> */}
        </div>
        
    )
}

export default CardsArea