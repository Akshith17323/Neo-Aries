"use-client"
import React from 'react'
import { ShoppingBag } from "lucide-react"

function Navbar() {
  return (
    <nav className="flex items-center justify-center py-4 px-6">
      <div className='w-[80%] flex flex-row justify-between'>
        <div className="">
          <a href="#" className="font-brand font-black text-2xl leading-2">NEO ARIES</a>
        </div>
        <div className=" hidden md:flex md:flex-row items-center gap-6 font-brand font-bold">
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div>
          <ShoppingBag />
        </div>
      </div>
    </nav>
  )
}

export default Navbar