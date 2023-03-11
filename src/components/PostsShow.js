import React,{useState} from 'react'
import styles from "./posts.module.css"
const PostsShow = ({ posts }) => {
 const[searchQuery,setSearchQuery] = useState("")
  const filteredResults = posts.filter((post)=>{
    return(
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
   
  })
    return (
        <>
        <input type="search" 
            value ={searchQuery}
            onChange = {(e)=>{setSearchQuery(e.target.value)}}
            placeholder="Search Fav posts...."
        />
        <div className={styles.postsGrid}>
          {filteredResults.length === 0 ? (<h1>OOps Nothing Found</h1>):filteredResults.map((post) => {
                return (
                    <div className = {styles.post}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                )

            })}
            
        </div>
        </>
    )
}

export default PostsShow