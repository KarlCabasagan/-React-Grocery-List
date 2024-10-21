import React, {useState} from "react"
import Card from "./Card";

function CardsArea() {

    return(
        <div className="w-[95%] h-auto mt-20 mb-20 flex flex-wrap justify-between">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        
    )
}

export default CardsArea