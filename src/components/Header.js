import React from 'react'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';

const Header = () => {
  return (
    <header className='sticky top-0 flex w-full bg-white pt-5 pb-5 border-b-2 mt-5'>
        <div className='ml-5'>
        <h1 className='text-4xl font-black font-Fredoka'>Skyleap</h1>
        </div>

        <div className='flex ml-auto mr-5 mt-auto mb-auto gap-5 text-gray-700'>
            <SettingsOutlinedIcon />
            <NotificationsNoneOutlinedIcon />
        </div>
    </header>
  )
}

export default Header