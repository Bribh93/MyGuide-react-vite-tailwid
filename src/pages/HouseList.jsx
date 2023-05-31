import React from 'react'
import {MdOutlineExpandMore, MdOutlineRemoveRedEye} from "react-icons/md"
import bosque from '../assets/bosque.png';
import house1 from '../assets/House1.png.png'
import house from '../assets/House.png.jpg'


export const HouseList = () => {
  return (
    <>
    <div className='scrollbar scrollbar-thumb-lime-500 scrollbar-track-slate-900'>
      <div className=' flex items-center justify-around mt-14'>
        <h1 className='text-lg font-semibold text-gray-700'>Houses from Landlords</h1>
        <div className='flex items-center gap-10'>
          <p className='text-lg font-semibold text-gray-700'>456 <span className='text-gray-500 font-light'>villa found</span></p>
          <button className='flex items-center border-2 border-gray-700 rounded-md px-4 py-1'>Filter by <MdOutlineExpandMore/></button>
        </div>
      </div>

      <section className='bg-[#E9EEF8] w-9/12 h-48 mx-auto rounded-md my-16 drop-shadow-lg'>
        <div className='flex flex-row'>
          <div>
            <img src={bosque} alt="Bosque" className='w-48 h-48 object-fill rounded-l-md' />
          </div>
            <div>
              <div className='flex items-center justify-around gap-4 mt-4 '>
                <h1 className='text-lg font-semibold text-gray-700'>Ultra Lux villa 460m2</h1>
                <div className='flex gap-4'>
                  <span className='flex items-center gap-1'><MdOutlineRemoveRedEye/><p className='text-gray-400 font-light text-sm'>784 views</p></span>
                  <button className='border-2 border-[#22BAFE] rounded-md px-4 py-1 text-gray-700 font-semibold hover:bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] hover:text-gray-100'>Add favorite</button>
                  <button className='bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] rounded-md text-gray-100 font-semibold px-4 py-1  hover:text-gray-700'>Make an Offer</button>
                </div>
              </div>
              <div className='flex items-center gap-4 ml-6'>
                <p className='font-semibold text-gray-400 text-sm'>Munich Bavaria, DE</p>
                <p className='text-gray-400 font-light text-xs'>12 days ago</p>
              </div>
              <div className='flex gap-8 ml-6 mt-6 text-gray-400 text-sm'>
                <p>Price <span className='text-gray-700 font-semibold'>$400.000,00</span></p>
                <p>Room <span className='text-gray-700 font-semibold'>6</span></p>
                <p>Restroom <span className='text-gray-700 font-semibold'>2</span></p>
                <p>Squre <span className='text-gray-700 font-semibold'>460m2</span></p>
              </div>
              <div>
              <p className='text-gray-500 font-light mt-6 ml-6'>This modern property opens the door for a great opportunity to secure a villa in this popular...</p>
              </div>
            </div>
          
        </div>
      </section>
      <section className='bg-[#E9EEF8] w-9/12 h-48 mx-auto rounded-md my-16 drop-shadow-lg'>
        <div className='flex flex-row'>
          <div>
            <img src={house1} alt="Bosque" className='w-48 h-48 object-fill rounded-l-md' />
          </div>
            <div>
              <div className='flex items-center justify-around gap-4 mt-4 '>
                <h1 className='text-lg font-semibold text-gray-700'>Ultra Lux Bodrum, 245m2</h1>
                <div className='flex gap-4'>
                  <span className='flex items-center gap-1'><MdOutlineRemoveRedEye/><p className='text-gray-400 font-light text-sm'>784 views</p></span>
                  <button className='border-2 border-[#22BAFE] rounded-md px-4 py-1 text-gray-700 font-semibold hover:bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] hover:text-gray-100'>Add favorite</button>
                  <button className='bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] rounded-md text-gray-100 font-semibold px-4 py-1 hover:text-gray-700'>Make an Offer</button>
                </div>
              </div>
              <div className='flex items-center gap-4 ml-6'>
                <p className='font-semibold text-gray-400 text-sm'>Munich Bavaria, DE</p>
                <p className='text-gray-400 font-light text-xs'>12 days ago</p>
              </div>
              <div className='flex gap-8 ml-6 mt-6 text-gray-400 text-sm'>
                <p>Price <span className='text-gray-700 font-semibold'>$400.000,00</span></p>
                <p>Room <span className='text-gray-700 font-semibold'>6</span></p>
                <p>Restroom <span className='text-gray-700 font-semibold'>2</span></p>
                <p>Squre <span className='text-gray-700 font-semibold'>460m2</span></p>
              </div>
              <div>
              <p className='text-gray-500 font-light mt-6 ml-6'>This modern property opens the door for a great opportunity to secure a villa in this popular...</p>
              </div>
            </div>
          
        </div>
      </section>
      <section className='bg-[#E9EEF8] w-9/12 h-48 mx-auto rounded-md my-16 drop-shadow-lg'>
        <div className='flex flex-row'>
          <div>
            <img src={house} alt="Bosque" className='w-48 h-48 object-fill rounded-l-md' />
          </div>
            <div>
              <div className='flex items-center justify-around gap-4 mt-4 '>
                <h1 className='text-lg font-semibold text-gray-700'>Premium Class Villa 500m2</h1>
                <div className='flex gap-4'>
                  <span className='flex items-center gap-1'><MdOutlineRemoveRedEye/><p className='text-gray-400 font-light text-sm'>784 views</p></span>
                  <button className='border-2 border-[#22BAFE] rounded-md px-4 py-1 text-gray-700 font-semibold hover:bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] hover:text-gray-100'>Add favorite</button>
                  <button className='bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] rounded-md text-gray-100 font-semibold px-4 py-1 hover:text-gray-700'>Make an Offer</button>
                </div>
              </div>
              <div className='flex items-center gap-4 ml-6'>
                <p className='font-semibold text-gray-400 text-sm'>Munich Bavaria, DE</p>
                <p className='text-gray-400 font-light text-xs'>12 days ago</p>
              </div>
              <div className='flex gap-8 ml-6 mt-6 text-gray-400 text-sm'>
                <p>Price <span className='text-gray-700 font-semibold'>$600.000,00</span></p>
                <p>Room <span className='text-gray-700 font-semibold'>10</span></p>
                <p>Restroom <span className='text-gray-700 font-semibold'>2</span></p>
                <p>Squre <span className='text-gray-700 font-semibold'>460m2</span></p>
              </div>
              <div>
              <p className='text-gray-500 font-light mt-6 ml-6'>This modern property opens the door for a great opportunity to secure a villa in this popular...</p>
              </div>
            </div>
          
        </div>
      </section>
      </div>
    </> 
  )
}
