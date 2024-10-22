import { useContext } from "react"
import { AddProductContext } from "./App";

function AddProductButton() {

    const [addProductModal, setAddProductModal] = useContext(AddProductContext)

    return(
        <div className=" fixed bottom-8 right-6 z-20 rounded-xl shadow-lg">
            <button onClick={() => setAddProductModal(!addProductModal)} className="w-16 h-16 bg-red-700 flex justify-center items-center rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#fafafa"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
            </button>
        </div>
    )
}

export default AddProductButton