
function CartTotal() {
    return(
        <div className="w-full h-24 bg-zinc-50 border-t-2 border-zinc-300 flex gap-0 justify-between items-center sticky shadow-md">
            <div className="w-[75%] ml-4">
                <h1 className="text-xl">Total:</h1>
                <h1 className="text-2xl text-red-600 font-semibold ml-2">₱100.00</h1>
            </div>
            <div className="w-[25%] h-full bg-zinc-900 flex justify-center items-center">
                <button className="w-full h-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#fafafa"><path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
                </button>
            </div>
        </div>
    )
}

export default CartTotal