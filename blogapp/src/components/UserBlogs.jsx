import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Blog from './Blog';

const UserBlogs = () => {
  const id=localStorage.getItem('userId');
  const [blog, setblog] = useState()
  const sendrequest=async()=>{
    const res=await axios.get(`http://localhost:3001/Blog/user/${id}`).catch(err=>(console.log(err)));
    const data=res.data
    return data
  }
  useEffect(() => {
    sendrequest().then(data=>(setblog(data.blogs.blogs)))
  }, [])
  console.log(blog)
  return (
    <div>
      {
        blog && blog.map((element,index)=>(
          <Blog title={element.title} description={element.description} imageURL={element.image} userName={element.user.name}/>
        ))
      }
    </div>
  )
}

export default UserBlogs