
import { Router, Route, Link, BrowserRouter, Routes, Switch, Navigate } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import EditProfile from './pages/EditProfile';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  return (
    <div >
      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route exact path="/edit" element={<EditProfile />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
