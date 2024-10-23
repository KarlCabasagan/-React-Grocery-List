import { useContext, useEffect } from "react"
import ProductModal from "./ProductModal"
import { ProductContext } from "./App"

function ProductModalOverlay() {

    const [productModal, setProductModal] = useContext(ProductContext)

    return(
        <>
            <div onClick={() => setProductModal(false)} className={(productModal ? "z-50 opacity-25" : "z-[-1] opacity-0") + " w-screen max-h-screen h-screen bg-zinc-700 fixed transition ease-in-out duration-200"}>
            </div>
            <ProductModal />
        </>
    )
}

export default ProductModalOverlay