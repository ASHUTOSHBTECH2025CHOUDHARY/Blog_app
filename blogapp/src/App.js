import React,{useEffect} from 'react';
import Header from './components/Header';
import Auth from './components/Auth';
import Blogs from './components/Blogs';
import Addblog from './components/Addblog';
import UserBlogs from './components/UserBlogs';
import Blogdetails from './components/Blogdetails';
import {Route, Routes} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux' 
import { authActions } from './store';

function App() {
  const dispatch=useDispatch();
  const isloggedin =useSelector((state)=>state.isloggedin)
  console.log(isloggedin)
  useEffect(() => {
    console.log(localStorage.getItem('userId'))
    if(localStorage.getItem('userId')){
      dispatch(authActions.login())
    }
  }, [dispatch])
  
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
      <Routes>
        {!isloggedin?<Route path='/auth' element={<Auth/>} exact/>:<>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/blogs/add' element={<Addblog/>}/>
        <Route path='/myblogs' element={<UserBlogs/>}/>
        <Route path='/user/blog' element={<Blogdetails/>}/>
        </>
        }
      </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
