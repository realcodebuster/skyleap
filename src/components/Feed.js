import React from 'react'
import Post from './Post'

const Feed = () => {
    const postDetails = [
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            profilePic: 'https://img.freepik.com/free-photo/bohemian-man-with-his-arms-crossed_1368-3542.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=ais',
            userName: 'Steve Johnson',
            lastSeen: '30 sec ago',
            postImage: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            likeCounter: '4,234,332 likes',
            lastLiked: 'Liked by VINO'
        },
    ]
  return (
    <div className='ml-5 mr-5 mt-8 mb-32 flex flex-col gap-5'>
        {postDetails.map((posts) => {
            return (
                <Post
                key={posts.id}
                profilePic={posts.profilePic}
                userName={posts.userName}
                lastSeen={posts.lastSeen}
                postImage={posts.postImage}
                likeCounter={posts.likeCounter}
                lastLiked={posts.lastLiked}
                />
            )
        })}
    </div>
  )
}

export default Feed

//flex flex-col gap-5 mt-8 ml-2 mr-2 pb-40