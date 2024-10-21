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
            {/* <div className="w-full h-1/2 flex items-center overflow-x-scroll">
                <h3 className="text-xl text-zinc-200 ml-10 whitespace-nowrap">My List</h3>
                <h3 className="text-xl text-zinc-200 ml-10 whitespace-nowrap">My List</h3>
                <h3 className="text-xl text-zinc-200 ml-10 whitespace-nowrap">My List</h3>
                <h3 className="text-xl text-zinc-200 ml-10 whitespace-nowrap">My List</h3>
                <h3 className="text-xl text-zinc-200 ml-10 whitespace-nowrap">My List</h3>
                <h3 className="text-xl text-zinc-200 ml-10 mr-10 whitespace-nowrap">+ New List</h3>
            </div> */}
        </div>
  )
}

export default Header
