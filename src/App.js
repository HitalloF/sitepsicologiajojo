import React from 'react'
import Home from './components/Home'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";  
import Produtos from './components/Produtos';

const App = () => {
  return (
  
    <BrowserRouter >
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/produtos' element={<Produtos/>}/>
    </Routes>
    </BrowserRouter>

   
  )
}

export default App