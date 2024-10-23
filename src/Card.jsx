import { useContext, useState } from "react"
import { ProductContext } from "./App"

function Card(props) {

    const [productModal, setProductModal] = useContext(ProductContext)

    return(
        <div onClick={() => setProductModal(!productModal)} className="w-[49%] h-60 bg-zinc-50 mt-3 rounded-lg flex flex-col items-center shadow">
            <img src={props.image} alt={props.image + ".jpg"} className="max-h-[75%] min-h-[75%] w-full object-cover rounded-t-lg" />
            <div className="w-[98%] mt-1 ml-2">
                <h4 className="w-[95%] text-zinc-900 text-lg truncate">{props.name}</h4>
                <h4 className="text-red-600 text-lg font-semibold truncate ml-1 mt-[-6px]">₱{props.price}</h4>
            </div>
        </div>
    )
}

export default Card