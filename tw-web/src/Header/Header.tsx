import React from 'react'
import img1 from "../assets/aesthetic-flower-01-920x518.jpg"
import menu from "../assets/icons8-menu-32 (1).png"
import search from "../assets/icons8-search-24 (2).png"
import person from "../assets/icons8-person-64.png"
import bag from "../assets/icons8-bag-64.png"


function Header() {
  return (
    <>
      <div className='h-screen bg-cover' style={{backgroundImage:`url(https://wallpapercave.com/wp/wp5323057.jpg)`}}>
        <div>
          <ul className='text-white flex gap-4 p-8'>
            <li><img src={menu} alt="" /></li>
            <span className='flex-1'></span>
           <li className='text-6xl'>Rhode & Bosse</li>
           <span className='flex-1'></span>
           <img className='w-10 h-10' src={person} alt="" />
           <img className='w-9 h-9 mt-1' src={bag} alt="" />
          </ul>
          
           <div>
            <ul className='text-white flex gap-6 justify-center font-bold'>
              <li>LIVING</li>
              <li>DINING</li>
              <li>BED</li>
              <li>BATH</li>
              <li>OUTDOOR</li>
              <li>LIGHTING</li>
              <li>TEXTILES</li>
              <li>RUGS</li>
              <li>DECOR</li>
              <li>SALE</li>
            </ul>
           </div>
        </div>
       
       
      </div>
        
    
    </>
  )
}

export default Header
