import React from 'react';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const Post = ({ profilePic, userName, lastSeen, postImage, likeCounter, lastLiked }) => {
  return (
    <div className='bg-gray-100 rounded-3xl p-5 grid grid-rows'>
         <div className='bg-white rounded-3xl p-4'>
            <div className='flex gap-5 ml-5'>
                <div className='border-2 rounded-xl border-orange-500 pl-1'>
                    <img src={profilePic} className='w-10' alt="" />
                </div>
                <div className='grid grid-cols-2 w-full'>
                <div>
                    <h3 className='font-bold'>{userName}</h3>
                    <span className='text-gray-500 text-sm'>{lastSeen}</span>
                </div>
                <div className='flex justify-end text-gray-500 mr-5 cursor-pointer'>
                    <p><MenuOutlinedIcon /></p>
                </div>
                </div>
            </div>

            <div className='p-5'>
                <img src={postImage} className='w-auto rounded-3xl h-72 border-4 border-orange-500' alt="" />
            </div>

            <div className='px-5 pb-3 pt-2'>
                <div className='grid grid-cols-2'>
                    <div className='flex gap-5'>
                        <FavoriteOutlinedIcon className='text-red-700' />
                        <CommentOutlinedIcon className='text-gray-500' />
                        <SendOutlinedIcon className='text-gray-500' />
                    </div>

                    <div className='flex justify-end'>
                        <BookmarkBorderOutlinedIcon />
                    </div>
                </div>
                <p className='mt-2 text-gray-600 text-sm'>{likeCounter} {lastLiked}</p>
            </div>
         </div>
    </div>
  )
}

export default Post