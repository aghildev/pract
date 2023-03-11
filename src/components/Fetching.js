import React,{useEffect,useState} from 'react'
import PostsShow from './PostsShow'

const Fetching = () => {
    const[posts,setPosts] = useState([])
    useEffect(()=>{
      const getPosts = async()=>{
        const data = await fetch("https://jsonplaceholder.typicode.com/posts")
        const jsonData = await data.json()
        console.log(jsonData)
        setPosts(jsonData)
      }
      getPosts()
    },[])
    
  return (
    <div>
        <h1>User Posts</h1>
        <PostsShow posts={posts}/>
     
    </div>
  )
}

export default Fetching