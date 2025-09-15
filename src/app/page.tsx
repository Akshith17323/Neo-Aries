"use-client"
import {ShoppingBag} from "lucide-react"

export default function Landing() {
  return (
    <nav className="flex flex-row w-full items-center justify-evenly py-4 px-6">
      <div className="">
        <a href="#" className="font-brand font-black text-2xl leading-2">NEO ARIES</a>
      </div>
      <div className=" hidden md:flex md:flex-row items-center gap-6 font-brand font-bold">
        <a href="#">Shop</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
      <div>
        <ShoppingBag/>
      </div>
    </nav>
  );
}
