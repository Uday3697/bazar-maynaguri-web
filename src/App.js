
import { Router, Route, Link, BrowserRouter, Routes, Switch, Navigate } from 'react-router-dom';
import './App.css';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';
import SearchPage from './pages/SearchPage';
import Signup from './pages/Signup';


function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes><Route exact path="/" element={<Home />} /></Routes>
        <Routes><Route exact path="/login" element={<Login />} /></Routes>
        <Routes><Route exact path="/signup" element={<Signup />} /></Routes>
        <Routes><Route exact path="/edit" element={<EditProfile />} /></Routes>
        <Routes><Route exact path="/search" element={<SearchPage />} /></Routes>
        

      </BrowserRouter>

    </div>
  );
}

export default App;
