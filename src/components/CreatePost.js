import React, {useState} from 'react'

const CreatePost = ({ onAddPost }) => {
    const [userName, setUserName] = useState('');
    const [profilePicUrl, setProfilePicUrl] = useState('');
    const [postImage, setPostImage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        onAddPost(userName, profilePicUrl, postImage)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <label>Profile Pic Url</label>
            <input type="text" value={profilePicUrl} onChange={(e) => setProfilePicUrl(e.target.value)} />
            <label>Post Image</label>
            <input type="text" value={postImage} onChange={(e) => setPostImage(e.target.value)} />
            <button type='submit'>Post</button>
        </form>
    </div>
  )
}

export default CreatePost