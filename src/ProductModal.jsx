import { useContext } from "react"
import { ProductContext, ProductDataContext } from "./App"

function ProductModal(props) {

    const [products, setProducts] = useContext(ProductDataContext)
    const [productModal, setProductModal] = useContext(ProductContext)

    const handleNameOnChange = (event) => {
        const updateProduct = products.map(product => {
            if(product.id === props.id) {
                return {...product, name: event.target.value}
            }
            return product
        })

        setProducts(updateProduct)
    }

    const handlePriceOnChange = (event) => {
        const updateProduct = products.map(product => {
            if(product.id === props.id) {
                return {...product, price: event.target.value}
            }
            return product
        })

        setProducts(updateProduct)
    }

    return(
        <div className={(productModal ? "h-full" : "h-[0px]") + " z-[51] w-screen max-h-[50%] flex justify-center items-center bg-zinc-100 fixed bottom-0 rounded-t-3xl transition-all ease-in duration-[200ms]"}>
            <div className="w-[90%] h-[90%] flex flex-col">
                <div className="w-full min-h-[60%] max-h-[60%] h-[60%] relative flex justify-center items-center">
                    <div onClick={() => {setProductModal(false); setProducts(products.filter(product => product.id !== props.id))}} className="absolute bg-white rounded-full p-1.5 top-2 right-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#dc2626"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                    </div>
                    <img src={props.image} alt={props.image + ".jpg"} className="max-h-[100%] min-h-[100%] w-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="w-full h-auto mt-3">
                    <input onChange={handleNameOnChange} className="bg-inherit w-full text-2xl focus:outline-none truncate" type="text" value={props.name} />
                    <hr className="mt-1 mb-1 border-zinc-300"/>
                    <div className="w-full flex items-center">
                        <h4 className="text-2xl pr-1 font-semibold text-red-600">₱</h4>
                        <input onChange={handlePriceOnChange} className="bg-inherit w-full text-2xl focus:outline-none font-semibold text-red-600" type="number" value={props.price} />
                    </div>
                </div>
                <div className="w-full flex justify-end">
                    <button className="bg-red-700 p-3 font-semibold text-zinc-100 rounded-lg">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductModal