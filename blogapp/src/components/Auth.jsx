import { Box, Button, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from '../store'
import { useNavigate } from 'react-router-dom'



const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const isloggedin=useSelector((state)=>state.isloggedin)
  const [inputs, setinputs] = useState({
    name:'',
    email:'',
    password:''
  })
  const [isSignup, setisSignup] = useState(false)
  const handlechange=(e)=>{
    setinputs((prestate)=>({
      ...prestate,
      [e.target.name]:e.target.value
    }))
  }
  const sendrequest=async(type='login')=>{
    const res=await axios.post(`http://localhost:3001/Bloguser/${type}`,{
      name:inputs.name,
      email:inputs.email,
      password:inputs.password
    }).catch((err)=>console.log(err))
    console.log(res)
    const data=await res.data
    // console.log(data)
    return data;
  }
  const submithandler=(e)=>{
    e.preventDefault();
    // console.log(inputs)
    if(isSignup){
      sendrequest('signup').then((data)=>localStorage.setItem(data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate('/blogs'));
    }
    else{
      sendrequest().then((data)=>localStorage.setItem(data.user._id)).then(()=>dispatch(authActions.login())).then(()=>navigate('/blogs'));
    }
  }
  return (
    <div>
      <form>
        <Box maxWidth={'30%'} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} boxShadow="10px 10px 20px #ccc" padding={3} margin='auto' marginTop={5} borderRadius={5}>
          
          <Typography variant='h2' padding={3} textAlign={'center'}>{!isSignup?"Login":"Signup"}</Typography>
          
          {isSignup && <TextField name='name' onChange={handlechange} value={inputs.name} placeholder='Name' margin='normal'/>}
          <TextField name='email' onChange={handlechange} value={inputs.email} placeholder='Email' type='email' margin='normal'/>
          <TextField name='password' onChange={handlechange} value={inputs.password} placeholder='Password' type='password' margin='normal'/>
          
          <Button onClick={submithandler} type='submit' variant='contained'sx={{borderRadius:3,marginTop:3}} color='warning'>Submit</Button>
          <Button onClick={()=>setisSignup(!isSignup)} sx={{borderRadius:3,marginTop:3}} color='warning'>Change to {isSignup?"Login":"Signup"}</Button>
        
        </Box>
      </form>
    </div>
  )
}

export default Auth