import CartButton from "./CartButton"

function Header() {

    return (
        <div className="w-full h-20 bg-zinc-100 border-b-2 border-zinc-300 flex-col fixed z-10 shadow">
            <div className="w-full h-full flex justify-between items-center">
                <div className="w-[28px] ml-3"></div>
                <h1 className="text-zinc-950 text-3xl">
                    Grocery List
                </h1>
                <CartButton />
            </div>
        </div>
  )
}

export default Header
