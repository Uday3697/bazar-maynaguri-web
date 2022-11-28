
import { Router, Route, Link, BrowserRouter, Routes, Switch, Navigate } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './pages/Home';


function App() {
  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          {/* <Route path="edit" element={<EditProfile />} />
          <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
