"use client";
export default function Landing() {
  return (
    // <div style={{backgroundImage: 'url("/images/heroImage)'}}>
      
    // </div>

    <div style={{ backgroundImage: "url('/images/heroImage.jpg')" }} className=" bg-cover max-w-screen bg-center h-screen flex justify-center items-center flex-col">
      <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white font-black font-brand mb-4 sm:mb-6 glitch">NEO ARIES</h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light mb-6 sm:mb-8 text-white text-muted-foreground max-w-2xl mx-auto px-4">REBELLIOUS STREETWEAR FOR THE UNDERGROUND CULTURE</p>
    </div>
  );
}
