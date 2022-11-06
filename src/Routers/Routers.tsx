import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Components/Home'
import AddProduct from '../Components/AddProduct'

export default function Routers() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/addproduct" element={<AddProduct />}/>
        </Routes>
    </>
  )
}
