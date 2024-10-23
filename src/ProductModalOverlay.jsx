import { useContext, useEffect } from "react"
import ProductModal from "./ProductModal"
import { ProductContext } from "./App"

function ProductModalOverlay({productData}) {

    const [productModal, setProductModal] = useContext(ProductContext)

    const product = productData[0]

    return(
        <>
            <div onClick={() => setProductModal(false)} className={(productModal ? "z-50 opacity-25" : "z-[-1] opacity-0") + " w-screen max-h-screen h-screen bg-zinc-700 fixed transition ease-in-out duration-1000"}>
            </div>
            <ProductModal key={product ? product.id : null} id={product ? product.id : null} name={product ? product.name : null} price={product ? product.price : null} image={product ? product.image : null} />
        </>
    )
}

export default ProductModalOverlay