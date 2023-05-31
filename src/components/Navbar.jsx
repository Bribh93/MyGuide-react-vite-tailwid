import {Dashboard} from '../pages/Dashboard'

import { NavLink } from 'react-router-dom';
import { FaCity } from "react-icons/fa";
import { MdOutlineLogout, MdViewModule, MdOutlineArtTrack, MdMailOutline, MdSource, MdOutlineFolderCopy, MdOutlineManageAccounts } from "react-icons/md";


export const Navbar = () => {
  return (
    <>
    <div className='scrollbar-thin scrollbar-track-orange-500'>
        <div className=' text-center bg-[#f1f3fd] h-screen font-semibold text-gray-700 rounded-xl m-6 '>
                <h1 className='inline-flex items-center gap-4 mt-8 pr-14 font-bold text-2xl'><span><FaCity className='text-[#22BAFE]'/></span> BBH93</h1>
            <div className=''>
                <h1 className='mt-8 pr-14 font-bold'>MAIN DASH</h1>
                <div className='grid gap-y-4 mt-8 hover:transition-all'>
                    <NavLink to="/" className='mt-4 focus:border-l-8 focus:border-[#22BAFE]'><MdViewModule className='inline-flex items-center mx-6'/> Dashboard</NavLink>
                    <NavLink to="/favoriteList" className='mt-4 focus:border-l-8 focus:border-[#22BAFE]' ><MdOutlineArtTrack className='inline-flex items-center mx-6 '/> Favorite List</NavLink>
                    <NavLink to="/message"className='pr-6 mt-4 focus:border-l-8 focus:border-[#22BAFE]'><MdMailOutline className='inline-flex items-center mx-6 animate-ping'/>Message</NavLink>
                </div>
            </div>
            <div className=''>
                <h1 className='mt-16 pr-14 font-bold'>MY HOUSE</h1>
                <div className='grid gap-y-4 mt-8 '>
                    <NavLink to="/houseList" className='mt-4 focus:border-l-8 focus:border-[#22BAFE]'><MdSource className='inline-flex items-center mx-6'/> House List</NavLink>
                    <NavLink to="/myFavorite" className='mt-4 focus:border-l-8 focus:border-[#22BAFE]'><MdOutlineFolderCopy className='inline-flex items-center mx-6'/>My Favorite</NavLink>
                    <NavLink to="/customize" className='mr-2 mt-4 focus:border-l-8 focus:border-[#22BAFE]'><MdOutlineManageAccounts className='inline-flex items-center mx-6'/>Customize</NavLink>
                </div>
            </div>
            <div className='mt-60'>
                <button className='mr-7'><MdOutlineLogout className='inline-flex items-center mx-6 animate-pulse'/>Log out</button>
            </div>
            
        </div>
        </div>      
    </>
  )
}
