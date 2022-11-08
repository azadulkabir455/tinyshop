import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"
import Home from '../Pages/Home'
import AddProduct from '../Pages/AddProduct'
import AddToCart from '../Pages/AddToCart'
import SinngleProduct from "../Pages/SinngleProduct"

export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<SinngleProduct />} />
        <Route path="/addcart" element={<AddToCart />} />
      </Routes>
    </>
  )
}
