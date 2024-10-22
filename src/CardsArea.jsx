import React, {useState} from "react"
import Card from "./Card";

function CardsArea() {

    return(
        <div className="w-[95%] max-h-full mt-20 mb-4 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden scrollbar-none">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <div className="w-full flex justify-center mt-14">
                <h1 className="text-zinc-600">No More Products</h1>
            </div>
        </div>
        
    )
}

export default CardsArea