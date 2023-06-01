import React, { useState } from 'react'
import { HouseList } from '../pages/HouseList';

import {MdOutlineExpandMore} from "react-icons/md"

import bosque from '../assets/House.jpg'
import casa1 from '../assets/House1.png'
import casa from '../assets/bosque.png'






export const DashboarPage = () => {
    
     const [houses, setHouses] = useState([
        {
            id: 1,
            name: 'Ultra Lux villa 460m2',
            imagen: bosque,
            location: 'Munich Bavaria, DE',
            dia: 38,
            price: '$400.000,00',
            room: '6',
            restroom: '2',
            squre: '460m2',
            description: 'This modern property opens the door for a great opportunity to secure a villa in this popular...',
            views: 934
        },    
        {
            id: 2,
            name: 'Ultra Lux Bodrum, 245m2',
            imagen: casa1,
            location: 'La Habana, CU',
            dia: 14,
            price: '$800.000,00',
            room: '4',
            restroom: '3',
            squre: '543m2',
            description: 'This modern property opens the door for a great opportunity to secure a villa in this popular...',
            views: 654
        },    
        {
            id: 3,
            name: 'Premium Class Villa 500m2',
            imagen: casa,
            location: 'Rio de Janerio, BR',
            dia: 44,
            price: '$600.000,00',
            room: '8',
            restroom: '4',
            squre: '1245m2',
            description: 'This modern property opens the door for a great opportunity to secure a villa in this popular...',
            views: 789
        },    
    ]);


  return (
    <>
    <div className='scrollbar-thin scrollbar-track-amber-600'>
        <div className='flex justify-around items-center text-gray-700 mt-14'>
            <div>
                <h1 className='text-2xl font-bold'>Jennifer Aniston</h1>
                <p className='text-xs text-left'>Good Morning</p>
            </div>
            <div className='flex gap-14'>
                <div>
                    <h3 className='text-sm text-gray-500'>Your active house</h3>
                    <p className='text-sm font-semibold text-left'>2 House <span>1 work</span></p>
                </div>
                <div>
                    <h3 className='text-sm text-gray-500'>New Houses</h3>
                    <p className='text-sm font-semibold text-left'>27</p>
                </div>
                <div>
                    <h3 className='text-sm text-gray-500'>New Messages</h3>
                    <p className='text-sm font-semibold text-left'>825</p>
                </div>
            </div>

        </div>
        <section className='mt-14 mx-36 text-left'>
            <h1 className='text-left font-semibold text-xl text-gray-700'>Find a House</h1>
            <form className='grid grid-cols-6 mt-8 gap-6'>
                <div className='col-span-3 '>
                    <label htmlFor='location' className='text-sm text-left text-gray-500'>Location</label>
                    <br/>
                    <input 
                    className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-11/12 text-lg'
                    type='text'
                    placeholder=''
                    id='location'
                    
                    />
                </div>
                <div>
                    <label htmlFor='minimum' className='text-sm text-left text-gray-500'>Price minimum</label>
                    <br />
                    <input 
                    className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-10/12 text-lg'
                    type='text'
                    placeholder=''
                    id='minimum'
                    name='minimum'
                    
                    />
                </div>
                <div>
                    <label htmlFor='maximum' className='text-sm text-left text-gray-500'>Price Maximum</label>
                    <input 
                    className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-10/12 text-lg'
                    type='text'
                    placeholder=''
                    id='maximum'
                    />
                </div>
                <div>
                    <label htmlFor='km' className='text-sm text-left text-gray-500'>Km maximun</label>
                    <input 
                    className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-6/12 text-lg'
                    type='text'
                    placeholder=''
                    id='km'
                    />
                </div>
                <div>
                <label className='text-sm text-left text-gray-500'>Property Type</label>
                    <select className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-10/12'>
                        <option value="villa">Villa</option>
                        <option value="finca">Finca</option>
                        <option value="playa">Playa</option>
                        <option value="piscina">Piscina</option>
                        <option value="bosque">Bosque</option>
                    </select>
                </div>
                <div>
                    <label className='text-sm text-left text-gray-500'>Bedrooms</label>
                    <select className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-6/12'>
                        <option value="villa">1</option>
                        <option value="finca">2</option>
                        <option value="playa">3</option>
                        <option value="piscina">4</option>
                        <option value="bosque">5</option>
                        <option value="bosque">6</option>
                        <option value="bosque">7</option>
                        <option value="bosque">8</option>
                    </select>
                </div>
                <div>
                    <label className='text-sm text-left text-gray-500'>Bathrooms</label>
                    <select className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-6/12'>
                        <option value="villa">1</option>
                        <option value="finca">2</option>
                        <option value="playa">3</option>
                        <option value="piscina">4</option>
                        <option value="bosque">5</option>
                        <option value="bosque">6</option>
                        <option value="bosque">7</option>
                        <option value="bosque">8</option>
                    </select>
                </div>
                <div>
                    <label className='text-sm text-left text-gray-500'>City</label>
                    <select className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-10/12'>
                        <option value="villa">1</option>
                        <option value="finca">2</option>
                        <option value="playa">3</option>
                        <option value="piscina">4</option>
                        <option value="bosque">5</option>
                        <option value="bosque">6</option>
                        <option value="bosque">7</option>
                        <option value="bosque">8</option>
                    </select>
                </div>
                <div>
                    <label className='text-sm text-left text-gray-500'>Country</label>
                    <select className=' bg-transparent border-b-2 border-gray-400 focus:outline-none
                    text-gray-700 font-semibold w-10/12'>
                        <option value="villa">Germany</option>
                        <option value="finca">Cuba</option>
                        <option value="playa">EU</option>
                        <option value="piscina">Mexico</option>
                        <option value="bosque">Canada</option>
                        <option value="bosque">Chile</option>
                        <option value="bosque">Colombia</option>
                        <option value="bosque">Brasil</option>
                    </select>
                </div>
                <button type='submit' className='bg-gradient-to-r from-[#1FA0FF] to-[#1ED6FF] rounded-md mt-2 text-gray-100'>Search</button>
            </form>
        </section>
        <section>

        
                <div className=' flex items-center justify-around mt-14'>
                    <h1 className='text-lg font-semibold text-gray-700'>Houses from Landlords</h1>
                    <div className='flex items-center gap-10'>
                        <p className='text-lg font-semibold text-gray-700'>456 <span className='text-gray-500 font-light'>villa found</span></p>
                        <button className='flex items-center border-2 border-gray-700 rounded-md px-4 py-1'>Filter by <MdOutlineExpandMore/></button>
                    </div>
                </div>
               

            {houses.map(house => {
                return <HouseList 
                key={house.id} 
                imagen={house.imagen}
                name={house.name}
                location={house.location}
                dia={house.dia}
                price={house.price}
                room={house.room}
                restroom={house.restroom}
                squre={house.squre}
                description={house.description}
                views={house.views}
                houses={houses}
                />  
            })}
            
            
            
        </section>
    </div>
    </>
  )
}
