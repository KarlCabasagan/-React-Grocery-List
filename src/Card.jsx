import { useState } from "react"

function Card() {

    const [modalShow, setModalShow] = useState(false)

    function clicked() {
        setModalShow(m => !m)
        
        if(modalShow === true) {
            console.log("True")
        }
        else {
            console.log("False")
        }
    }

    return(
        <div onClick={() => clicked(modalShow)} className="w-[49%] h-60 bg-zinc-50 mt-3 rounded-lg flex flex-col items-center shadow">
            <img src="images/test.jpg" alt="Toblerone.jpg" className="max-h-[75%] min-h-[75%] w-full object-cover rounded-t-lg" />
            <div className="w-[98%] mt-1 ml-2">
                <h4 className="w-[95%] text-zinc-900 text-lg truncate">Toblerone Original</h4>
                <h4 className="text-red-600 text-lg font-semibold truncate ml-1 mt-[-6px]">₱109.00</h4>
            </div>
        </div>
    )
}

export default Card