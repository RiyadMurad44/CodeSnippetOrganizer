import Home from '../Pages/Home';
import Login from "../Pages/Login"
import Signup from '../Pages/Signup';
import Add_Snippet from '../Pages/Add_Snippet';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return ( 
    // <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/add_snippet" element={<Add_Snippet />} />
      </Routes>
    // </BrowserRouter>
  );
}

export default App