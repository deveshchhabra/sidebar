"use client"
import Image from 'next/image'
import Link from 'next/link'
import './App.css'
import { useState } from 'react'
const page = () => {
  const [Ham, setHam] = useState(true);
  const [starCount, setCount] = useState(true);
  const [starCount2, setCount2] = useState(true);
  const [buttonCount3, setCount3] = useState('');
  const [button, setbutton] = useState(true);

  const apple=()=>{
    setCount3('#a6c1ee')
  }
  return (
    <main className='bg-gradient-to-t from-[#bc2eb] to-[#a6c1ee] h-screen'>
      <div className='bg-gradient-to-t from-[#fbc2eb] to[#a6c1ee] h-screen'>
         <nav className="flex justify-between item-center w-[92%]">
         <div> <img className='w-2/5' src='https://ayuvya.com/static/media/ayuvya-350x114-black.2946361cad7d096b9a43.webp' alt='...'></img> </div>
          <div className={`md:static  absolute item-center md:min-h-fit  left-0 md:w-auto w-full  ${Ham ? 'top-20 ':'top-[-490px] mt-1.25 size-1.875 justify-center'}`}>  
          
          <div className='flex-col'><div>Safety </div>
            {[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount(index+1)}}>&#9733;</span>})}
          </div>
          Rating-Count:{starCount}
         
          <div className='flex-col'><div>Communction</div>
            {[...Array(5)].map((_,index)=>{return <span className={`cursor-pointer ${index+1<=starCount2 ?'text-yellow-300':''}`}  key={index} onClick={()=>{setCount2(index+1)}}>&#9733;</span>})}
          </div>
          Communction-Count:{starCount2}
         
          <div className='flex'><div>Would You Trust ?</div>
          <button onClick={()=>apple()} className={`bg-[${buttonCount3}] text-white px-2 py-2 mx-6 my-6 md:rounded-auto rounded-full hover:bg-[#87acec]`}>&#128077;YES</button>
          <button onClick={()=>apple()} className={` text-white px-2 py-2 mx-6 my-6 md:rounded-auto rounded-full hover:bg-[#87acec]`}>&#128078;NO</button>
          
          </div>
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

export default page