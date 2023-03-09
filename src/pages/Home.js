import React from 'react'
import Feed from '../components/Feed'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import Stories from '../components/Stories'

const Home = () => {
    // const [postList, setPostList] = useState([]);
    // const handleLogOut = () => {
    //     localStorage.clear()
    //     window.location.reload()
    // }

    // const addPostHandler = (uName, profilePic, postPic) => {
    // //     setPostList((prevPostList) => {
    // //       return [...prevPostList, {name: uName, profile: profilePic, post: postPic}];
    // //     })
    // //   }

  return (
    <div>
        <Header />
        <Stories />
        {/* <CreatePost onAddPost={addPostHandler} /> */}
        <Feed />
        <NavBar />
    </div>
  )
}

export default Home

//<button onClick={handleLogOut}>Logout</button>