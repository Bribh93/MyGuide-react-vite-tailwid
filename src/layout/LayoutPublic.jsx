import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const LayoutPublic = () => {
  return (
      <>
      <div className='grid grid-cols-5 bg-gradient-to-r from-[#F2F8FF] via-[#cfe7ff] to-[#E2E5FD] '>
      
        <aside className=''><Navbar/></aside>
        <main className='col-span-3 text-center'>
            <Outlet/>
        </main>
        <div className='text-center'>My Houses</div>
        </div>
      </>
  )
}
