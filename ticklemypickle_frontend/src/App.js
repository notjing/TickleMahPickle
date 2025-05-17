import SignInCard from './sign-in-side/SignInSide';
import SignUpCard from './sign-in-side/SignUpSide';
import React from 'react';
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Jars from './pages/Jars';
import Profile from './pages/Profile';
import UserDashboard from './pages/UserDashboard';

function App() {

  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/users")
  //     .then(res => res.json())
  //     .then(data => setUsers(data))
  //     .catch(err => console.error(err));
  // }, []);


  return (
        // <div className="App">
    //   <SignUpCard />
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="jars" element={<Jars/>} />
          <Route path="profile" element={<Profile/>}/>
          <Route path="test" element={<UserDashboard/>}/>

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
