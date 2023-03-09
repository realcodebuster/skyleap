import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='h-auto p-6 fixed inset-x-0 bottom-0 bg-white shadow-2xl shadow-orange-600'>
        <ul className='flex justify-around ml-auto mr-auto text-gray-600'>
            <Link to='/Home'><li className='active:text-orange-600 border-b-orange-700 cursor-pointer duration-100'><HomeOutlinedIcon /></li></Link>
            <Link to='/Message'><li className='active:text-orange-600 border-b-orange-700 cursor-pointer duration-100'><ChatOutlinedIcon /></li></Link>
            <li><span className='bg-orange-500 text-white p-4 rounded-bl-lg rounded-br-sm active:bg-neutral-200 active:text-orange-500 duration-300'><AddCircleOutlineOutlinedIcon /></span></li>
            <li className='active:text-orange-600 border-b-orange-700 cursor-pointer duration-100'><SearchOutlinedIcon /></li>
            <li className='active:text-orange-600 border-b-orange-700 cursor-pointer duration-100'><PeopleOutlineOutlinedIcon /></li>
        </ul>
    </nav>
  )
}

export default NavBar