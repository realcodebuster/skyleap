import React from 'react'

const Home = () => {
    const handleLogOut = () => {
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        <h1>Home</h1>
        <button onClick={handleLogOut}>Logout</button>
    </div>
  )
}

export default Home