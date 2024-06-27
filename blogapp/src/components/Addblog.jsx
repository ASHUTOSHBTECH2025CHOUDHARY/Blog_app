import React,{useState} from 'react'
import { Box, Button, InputLabel, TextField, Typography } from "@mui/material"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const labelstyle={mb:1,mt:2,fontSize:'24px',fontWeight:'bold'}
const Addblog = () => {
  const history=useNavigate();
  const [inputs, setinputs] = useState({
    title:'',
    description:'',
    imageUrl:''
  })
  const sendrequest=async()=>{
    console.log(inputs)
   await axios.post('https://blogapp-dun-ten.vercel.app/Blog/addblogs',{
      title:inputs.title,
      description:inputs.description,
      image:inputs.imageUrl,
      user:localStorage.getItem('userId')
    }).catch(err=>console.log(err))
  }
  const handlechange=(e)=>{
    setinputs((prestate)=>({
      ...prestate,
      [e.target.name]:e.target.value
    }))
  }
  const submithandler=(e)=>{
    e.preventDefault()
    // console.log(inputs)
    sendrequest();
  }
  return (
    <div>
      <form onSubmit={submithandler}>
        <Box
        border={3}
        borderColor={'green'}
        borderRadius={10}
        boxShadow={'10px 10px 20px #ccc'}
        padding={3}
        margin={'auto'}
        marginTop={'4%'}
        display={'flex'}
        flexDirection={'column'}
        width={'80%'}
        >
          <Typography fontWeight={'bold'} padding={3} color={'black'} variant='h2' textAlign={'center'}>Add Your Blog</Typography>
          <InputLabel sx={labelstyle} >Title</InputLabel>
          <TextField name='title' onChange={handlechange} value={inputs.title} margin='auto' variant='outlined'/>
          <InputLabel sx={labelstyle}>Description</InputLabel>
          <TextField name='description' onChange={handlechange} value={inputs.description} margin='auto' variant='outlined'/>
          <InputLabel sx={labelstyle}>ImageURL</InputLabel>
          <TextField name='imageUrl' onChange={handlechange} value={inputs.imageUrl} margin='auto' variant='outlined'/>
          <Button sx={{mt:2,borderRadius:4}} variant='contained' color='warning' type='submit'>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default Addblog