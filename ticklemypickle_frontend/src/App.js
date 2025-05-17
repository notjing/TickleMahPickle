import SignInCard from './sign-in-side/SignInSide';
import SignUpCard from './sign-in-side/SignUpSide';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Jars from './pages/Jars';
import Profile from './pages/Profile';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<SignInCard />} />
        <Route path="/" element={<Layout />}>
          {/* <Route path="" element={<Home />} /> */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jars" element={<Jars/>} />
          <Route path="profile" element={<Profile/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
