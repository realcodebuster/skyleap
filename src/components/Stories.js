import React from 'react'
import Story from './Story'

const Stories = () => {
    const storiesData = [
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'You',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
        {
            id: Math.floor(Math.random() * 500) + 5,
            image: 'https://img.freepik.com/free-photo/beautiful-shot-tree-savanna-plains-with-blue-sky_181624-21992.jpg?size=626&ext=jpg&ga=GA1.2.334268775.1676100785&semt=sph',
            title: 'Steve',
        },
    ]
  return (
    <div className='sticky mt-3 pl-4 grid grid-cols-7 gap-x-20  h-auto w-full overflow-x-scroll'>
        {storiesData.map((stories) => {
            return (
                <Story
                key={stories.id}
                image={stories.image}
                title={stories.title}
                />
            )
        })}
    </div>
  )
}

export default Stories