import React, { useState } from 'react'
import {AppBar, Box, Button, Tab, Tabs, Toolbar, Typography} from "@mui/material"
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux'
import { authActions } from '../store';

const Header = () => {
  const dispatch=useDispatch()
  const [value,setvalue]=useState();
  const isloggedin =useSelector((state)=>state.isloggedin)
  return (
    <AppBar position='sticky'
     sx={{background:
    "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(62,9,121,1) 35%, rgba(0,212,255,1) 100%)"}}>
        <Toolbar>
            <Typography variant='h4'>BlogaApp</Typography>
            {isloggedin && <Box display={'flex'} marginLeft={'auto'} marginRight={'auto'}>
              <Tabs textColor='inhirt' value={value} onChange={(e,val)=>setvalue(val)} >
                <Tab LinkComponent={Link} to='/blogs' label="All Blogs"/>
                <Tab LinkComponent={Link} to='/myblogs' label="My Blogs"/>
                <Tab LinkComponent={Link} to='/blogs/add' label="Add Blogs"/>
              </Tabs>
            </Box>}
            <Box display={'flex'} marginLeft={'auto'}>
                {!isloggedin && <Button LinkComponent={Link} to='/auth' variant='contained' color='warning' sx={{margin:1,borderRadius:10}}>Log in</Button>}
                {!isloggedin && <Button LinkComponent={Link} to='/auth' variant='contained' color='warning' sx={{margin:1,borderRadius:10}}>Signup</Button>}
                {isloggedin && <Button onClick={()=>dispatch(authActions.logout())} LinkComponent={Link} to='/auth' variant='contained' color='warning' sx={{margin:1,borderRadius:10}}>Log out</Button>}
            </Box>
        </Toolbar>
    </AppBar>
  )
}

export default Header