import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setblogs] = useState()

  const sendrequest=async()=>{
    const res= await axios.get("http://localhost:3001/Blog/getblogs").catch((err)=>console.log(err))
    const data=await res.data;
    // console.log(data)
    return data;
  }
  useEffect(() => {
    sendrequest().then(data=>(setblogs(data.blogs)))
  }, [])
  // console.log(blogs)
  return (
    <div>
      {
        blogs && blogs.map((element,index)=>(
          <Blog title={element.title} description={element.description} imageURL={element.image} userName={element.user.name}/>
        ))
      }
    </div>
  )
}

export default Blogs