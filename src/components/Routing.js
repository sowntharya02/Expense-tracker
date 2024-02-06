import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Login';
import Home from './Home';
import Main from './Main';
import SignupPage from './SignUpForm';
const Routing = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Login/>}/> */}
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<Home/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
       

      </Routes>
    </Router>
  );
};

export default Routing;
