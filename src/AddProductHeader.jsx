import { useContext } from "react"
import { AddProductContext } from "./App"

function AddProductHeader() {

    const [addProductModal, setAddProductModal] = useContext(AddProductContext)

    return(
        <div className="w-full h-20 bg-zinc-100 border-b-2 border-zinc-300 flex justify-between items-center fixed shadow">
            <div className="w-[28px] ml-3"></div>
            <div className="ml-3">
                <h1 className="text-zinc-950 text-3xl">Add Product</h1>
            </div>
            <div className="mr-3">
                <svg onClick={() => setAddProductModal(false)} xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#09090B"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
            </div>
        </div>
    )
}

export default AddProductHeader