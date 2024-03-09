"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
export default function Home () {
  const [Ham, setHam] = useState(true);
  return (
    <main className='bg-gradient-to-t from-[#bc2eb] to-[#a6c1ee] h-screen'>
      <div className='bg-gradient-to-t from-[#fbc2eb] to[#a6c1ee] h-screen'>
         <nav className="flex justify-between item-center w-[92%]">
         <div> <img className='w-2/5' src='https://ayuvya.com/static/media/ayuvya-350x114-black.2946361cad7d096b9a43.webp' alt='...'></img> </div>
          <div className={`md:static  absolute item-center md:min-h-fit  left-0 md:w-auto w-full flex ${Ham ? 'top-20 ':'top-[-490px]'}`}>     
              <ul className="flex md:flex-row flex-col md:w-auto w-full md-place-items-center md:gap-[5vw]  gap-10  px-16  ">
                <li></li>
                <li></li>
                    <li><Link className="hover:text-gray-500" href="">All Products</Link></li>
                    <li><Link className="hover:text-gray-500"href="">Skin&health</Link></li>
                    <li><Link className="hover:text-gray-500"href="/Review">Review</Link></li>
            </ul>
          </div>
          <div>
          <button className="bg-[#a6c1ee] text-white px-2 py-2 mx-6 my-6 md:rounded-auto rounded-full hover:bg-[#87acec]">Sing-up</button>
          </div>
         
         <div className="flex item-center gap-6 md:hidden">{Ham?(
          <button  className="cursor-pointer" onClick={()=>setHam(false) }>☰</button>):(<button  className=" cursor-pointer" onClick={()=>setHam(true)}>X</button>)} 
         
          </div>
         </nav> 
        </div>
    </main>
  )
}
