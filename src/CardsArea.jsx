import React, {useState} from "react"
import Card from "./Card";

function CardsArea() {

    return(
        <div className="w-[95%] h-[100%] mt-20 mb-4 flex flex-wrap justify-between overflow-y-auto overflow-x-hidden scrollbar-none">
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
        </div>
        
    )
}

export default CardsArea