"use-client"
import { url } from "inspector";
import {ShoppingBag} from "lucide-react"

export default function Landing() {
  return (
    <>
    <nav className="flex flex-row w-full items-center justify-evenly py-4 px-6 fixed top-0 bg-black/80">
      <div className="">
        <a href="#" className="font-brand font-black text-2xl leading-2 text-red-800">NEO ARIES</a>
      </div>
      <div className=" hidden md:flex md:flex-row items-center gap-6 font-brand font-bold ">
        <a href="#" className="hover:text-red-900 transition-all duration-250 ease-in-out cursor-pointer">SHOP</a>
        <a href="#" className="hover:text-red-900 transition-all duration-250 ease-in-out cursor-pointer">ABOUT</a>
        <a href="#" className="hover:text-red-900 transition-all duration-250 ease-in-out cursor-pointer">CONTACT</a>
      </div>
      <div>
        <ShoppingBag className="hover:text-red-900 transition-all duration-250 ease-in-out cursor-pointer"/>
      </div>
    </nav>
    <div style={{backgroundImage: 'url("https://preview--neo-aries-rebel-web.lovable.app/assets/hero-image-DFBSBDrk.jpg")',height:"100vh",opacity:"20"}} className="flex justify-center flex-col items-center object-cover">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black font-brand mb-4 sm:mb-6 glitch leading-tight font-stretch-extra-expanded">NEO ARIES</h1>
      <p className="text-2xl font-mono leading-3.5">REBELLIOUS STREETWEAR FOR THE UNDERGROUND CULTURE</p>
    </div>
    <div className="absolute inset-0 scan-line pointer-events-none"></div>
    </>
  );
}
