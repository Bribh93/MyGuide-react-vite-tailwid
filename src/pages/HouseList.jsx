import React, {useState} from 'react'
import {MdOutlineRemoveRedEye} from "react-icons/md"
import { FavoriteList } from './FavoriteList';



export const HouseList = (props) => {

      const {imagen,name,location,dia,price,room,restroom,squre,description,views} = props
      

  return (
    <>
      
      <section className='bg-[#E9EEF8] w-9/12 h-48 mx-auto rounded-md my-16 drop-shadow-lg'>
        <div className='flex flex-row'>
          <div>
            <img src={imagen} alt="Bosque" className='w-48 h-48 object-fill rounded-l-md' />
          </div>
            <div>
              <div className='flex items-center justify-around gap-4 mt-4 '>
                <h1 className='text-lg font-semibold text-gray-700'>{name}</h1>
                <div className='flex gap-4'>
                  <span className='flex items-center gap-1'><MdOutlineRemoveRedEye/><p className='text-gray-400 font-light text-sm'>{views} views</p></span>
                  <button  className='border-2 border-[#22BAFE] rounded-md px-4 py-1 text-gray-700 font-semibold hover:bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] hover:text-gray-100'>Add favorite</button>
                  <button className='bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] rounded-md text-gray-100 font-semibold px-4 py-1  hover:text-gray-700'>Make an Offer</button>
                </div>
              </div>
              <div className='flex items-center gap-4 ml-6'>
                <p className='font-semibold text-gray-400 text-sm'>{location}</p>
                <p className='text-gray-400 font-light text-xs'>{dia} days ago</p>
              </div>
              <div className='flex gap-8 ml-6 mt-6 text-gray-400 text-sm'>
                <p>Price <span className='text-gray-700 font-semibold'>{price}</span></p>
                <p>Room <span className='text-gray-700 font-semibold'>{room}</span></p>
                <p>Restroom <span className='text-gray-700 font-semibold'>{restroom}</span></p>
                <p>Squre <span className='text-gray-700 font-semibold'>{squre}</span></p>
              </div>
              <div>
              <p className='text-gray-500 font-light mt-6 ml-6'>{description}</p>
              </div>
            </div>
          
        </div>
      </section>
      
    </> 
  )
}
