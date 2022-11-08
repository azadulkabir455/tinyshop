import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillBagFill } from "react-icons/bs";
import Images from "../Assets/Images/Images"
import {useSelector} from "react-redux"

export default function Nav() {
  const {totalQuantity} = useSelector((state:any) => state.CartReducer);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light myNav fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><img src={Images.logo} alt="" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active pe-3" aria-current="page" to="/addProduct">Add product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/addcart"><BsFillBagFill /><span>{totalQuantity}</span></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
