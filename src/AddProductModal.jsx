import { useContext } from "react"
import { AddProductContext } from "./App"
import AddProductHeader from "./AddProductHeader"
import AddProductForm from "./AddProductForm"

function AddProductModal() {

    const [addProductModal, setAddProductModal] = useContext(AddProductContext)

    return(
        <div className={(addProductModal ? "z-40 opacity-100" : "opacity-0 z-[-1]") + " w-screen h-screen max-h-screen flex flex-col items-center bg-zinc-100 fixed transition ease-in-out duration-200"}>
            <AddProductHeader />
            <AddProductForm />
        </div>
    )
}

export default AddProductModal