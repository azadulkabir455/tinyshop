import { Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../store"
import Home from '../Pages/Home'
import AddProduct from '../Pages/AddProduct'
import AddToCart from '../Pages/AddToCart'

export default function Routers() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/addcart" element={<AddToCart />} />
        </Routes>
      </Provider>
    </>
  )
}
