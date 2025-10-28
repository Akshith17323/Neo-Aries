"use client"
import { ShoppingBag } from 'lucide-react'
export default function Home() {
  return (
    <>
      <div className="flex justify-center">
        <nav className="fixed top-0 flex bg-black/80 justify-around items-center w-full px-6 py-4 border-b text-white z-50">
          <div><a href="#" className='font-black text-2xl font-brand'>NEO ARIES</a></div>
          <div className='flex justify-center items-center gap-8'>
            <a href="#" className='font-brand'>SHOP</a>
            <a href="#" className='font-brand'>OFFERS</a>
            <a href="#" className='font-brand'>ABOUT</a>
            <a href="#" className='font-brand'>CONTACT</a>
          </div>
          <div><button><ShoppingBag size={24} /></button></div>
        </nav>
      </div>

      <div className='min-h-screen absolute inset-0 flex justify-center items-center h-full flex-col' style={{ backgroundImage: "url('/cover.png')", backgroundSize: 'cover', backgroundPosition: 'center', opacity: "0.6" }}></div>
      <div className="absolute inset-0 scan-line pointer-events-none"></div>
      <div className='relative flex justify-center items-center h-full flex-col'>
        <h1 className='text-9xl text-white font-black glitch font-brand' data-text='NEO ARIES'>NEO ARIES</h1>
        <p className='text-white text-lg'>REBELLIOUS STREETWEAR FOR THE UNDERGROUND CULTURE</p>
      </div>
    </>
  );
}
