
import { Router, Route, Link, BrowserRouter, Routes, Switch, Navigate } from 'react-router-dom';
import './App.css';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';
import Signup from './pages/Signup';
import { GlobalContex } from './globalContex';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';


function App() {
  const [loginData, setLoginData] = useState({});
  const [login, setLogin] = useState(false);
  const [userEmail, setUserEmail] = useState("")
  const [user, setUser] = useState({})

  const value = {
    setUserEmail,
    loginData,
    setLoginData,
    login,
    setUser
  }



  useEffect(() => {
    axios
      .get(
        "https://phpwebdevelopmentservices.com/project-react-backend/api/login",

        {
          headers: {
            email: loginData.email,
            token: loginData.idToken,
          },
        }
      )
      .then((res) => {
        if (!localStorage.getItem("UserTag")) {
          console.log(res.data, "jhffjy");


          localStorage.setItem("user", JSON.stringify(res.data.userdata));
          setUser(res.data.result.userdata.name);
          console.log("iiiiiiiiii", user)
        }
      });
  }, []);
  return (
    <div >
      <GlobalContex.Provider value={value}>
        <BrowserRouter>

          <Routes><Route exact path="/" element={<Home />} /></Routes>
          <Routes><Route exact path="/home" element={<Home />} /></Routes>
          <Routes><Route exact path="/login" element={<Login />} /></Routes>
          <Routes><Route exact path="/signup" element={<Signup />} /></Routes>
          <Routes><Route exact path="/edit" element={<EditProfile />} /></Routes>
          <Routes><Route exact path="/search" element={<SearchPage />} /></Routes>
          <Routes> <Route exact path="/" element={loginData !== null ? <Home /> : <Navigate to="/login" />} /></Routes>
      



        </BrowserRouter>
      </GlobalContex.Provider>

    </div>
  );
}

export default App;
