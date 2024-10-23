import { useContext, useEffect, useRef, useState } from "react"
import { AddProductContext, ProductDataContext, UniqueIdContext } from "./App"

function AddProductForm() {

    const [addProductModal, setAddProductModal] = useContext(AddProductContext)

    const [uniqueId, setUniqueId] = useContext(UniqueIdContext)
    const [products, setProducts] = useContext(ProductDataContext)

    const nameRef = useRef(null)
    const priceRef = useRef(null)
    const imageRef = useRef(null)

    const [productImage, setProductImage] = useState("blank-image.jpg")


    const handleImageChange = (event) => {
        const file = event.target.files[0]
        const allowedImageTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif']
    
        if (!file || !allowedImageTypes.includes(file.type)) {
          alert('Please select a valid image file (JPEG, PNG, or GIF).')
          return
        }
    
        setProductImage(URL.createObjectURL(file))
    }

    const handleSubmitForm = (event) => {
        const name = nameRef.current.value
        const price = priceRef.current.value
        const image = imageRef.current.src

        if(nameRef.current.value.length < 1 ) {
            alert("Please enter a product name")
            return
        }

        const newProduct = {id: uniqueId, name: name, price: price, image: image}

        setProducts(p => [...p, newProduct])
        setUniqueId(u => u + 1)
        setAddProductModal(a => false)

        clearInputs()
    }

    function clearInputs() {
        nameRef.current.value = ""
        priceRef.current.value = ""
        imageRef.current.src = "blank-image.jpg"
    }

    return(
        <div className="w-[95%] h-auto mt-[92px] flex flex-col items-center">
            <div className="w-full h-52 relative flex justify-center items-center">
                <input onChange={handleImageChange} className="absolute h-full w-full opacity-0" type="file" />
                <img ref={imageRef} src={productImage} alt="Toblerone.jpg" className="max-h-[100%] min-h-[100%] w-full object-cover rounded-lg" />
            </div>
            <div className="w-full h-auto mt-3">
                <div className="w-full h-auto border-zinc-700 border-2 flex justify-center rounded-lg">
                    <input ref={nameRef} className="w-[99%] p-2 bg-inherit focus:outline-none text-xl" type="text" placeholder="Product Name" />
                </div>
                <div className="w-full h-auto mt-2">
                    <div className="w-full h-auto border-zinc-700 border-2 flex justify-center rounded-lg">
                        <h4 className="text-xl flex justify-center items-center ml-2">₱</h4>
                        <input ref={priceRef} className="w-[95%] p-2 bg-inherit focus:outline-none text-xl" type="number" placeholder="1000.00" />
                    </div>
                </div>
                <div className="w-full h-auto mt-3 flex justify-end">
                    <button onClick={handleSubmitForm} className="mr-4 text-xl font-semibold text-red-600">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProductForm