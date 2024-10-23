
function AddProductForm() {
    return(
        <div className="w-[95%] h-auto mt-[92px] flex flex-col items-center">
            <div className="w-full h-52">
                <img src="images/test.jpg" alt="Toblerone.jpg" className="max-h-[100%] min-h-[100%] w-full object-cover rounded-lg" />
            </div>
            <div className="w-full h-auto mt-3">
                <div className="w-full h-auto border-zinc-700 border-2 flex justify-center rounded-lg">
                    <input className="w-[99%] p-2 bg-inherit focus:outline-none text-xl" type="text" placeholder="Product Name" />
                </div>
                <div className="w-full h-auto mt-2">
                    <div className="w-full h-auto border-zinc-700 border-2 flex justify-center rounded-lg">
                        <h4 className="text-xl flex justify-center items-center ml-2">₱</h4>
                        <input className="w-[95%] p-2 bg-inherit focus:outline-none text-xl" type="number" placeholder="1000.00" />
                    </div>
                </div>
                <div className="w-full h-auto mt-3 flex justify-end">
                    <button className="mr-4 text-xl font-semibold text-red-600">
                        Done
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddProductForm