import { useState } from 'react'
import './App.css'
import {BrowserRouter, Navigate, Routes, Route} from 'react-router-dom'
import HomePage from './scenes/homepage/Home'
import AboutPage from './scenes/about-page/AboutPage'
import ProductsPage from './scenes/products-page/ProductsPage'

function App() {
  return (
  
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
      </Routes>


</BrowserRouter>
  )
}

export default App
