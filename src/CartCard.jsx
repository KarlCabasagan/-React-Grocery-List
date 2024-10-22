import { useState } from "react"

function CartCard() {

    const [modalShow, setModalShow] = useState(false)

    return(
        <div className="w-full h-60 bg-zinc-50 mt-3 rounded-lg relative flex flex-col items-center shadow">
            <div className="absolute bg-white rounded-full p-1.5 top-2 right-2 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#dc2626"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
            <img src="images/test.jpg" alt="Toblerone.jpg" className="max-h-[75%] min-h-[75%] w-full object-cover rounded-t-lg" />
            <div className="w-[98%] mt-1 ml-2 flex items-center justify-between">
                <div className="w-[65%]">
                    <h4 className="w-[90%] text-zinc-900 text-lg truncate">Toblerone Original sdafasdf s sadfsad sdaf dsaf asdf</h4>
                    <h4 className="text-red-600 text-lg font-semibold truncate ml-1 mt-[-6px]">₱109.00</h4>
                </div>
                <div className="w-auto flex items-center justify-center mr-4 gap-0.5 border-2 border-zinc-300 rounded">
                    <button className="w-8 h-8 rounded border-r-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#09090B"><path d="M200-440v-80h560v80H200Z"/></svg>
                    </button>
                    <input className="w-8 h-8 text-center text-xl" type="number" />
                    <button className="w-8 h-8 rounded border-l-2 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#09090B"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartCard