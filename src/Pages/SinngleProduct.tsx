import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { BsDash,BsPlus } from "react-icons/bs";

export default function SinngleProduct() {
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams();
    const { product } = useSelector((state: any) => state.ProductReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "PRODUCT", id: id })
    }, [id])
    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity -1)
        }
    }
    const addProduct = () => {
        dispatch({type:"AddTOCart",payload:{product, quantity}})
    }
    return (
        <>
            <div className="container">
                <div className="row g-3 mt-5">
                    <div className="col-12 col-lg-4">
                        <img src={`/images/${product.image}`} alt="" />
                    </div>
                    <div className="col-12 col-lg-8">
                        <h1>{product.name}</h1>
                        <div className="price">
                            <span className="actualPrice">{product.price}</span>
                            <span className="disCountPrice ms-5">{product.discountPrice}</span>
                        </div>
                        <div className="incDec d-flex justify-contents-between mt-4">
                            <span className='ps-1 pe-1 border rounded' onClick={decrementQuantity}><BsDash /></span>
                            <span className='ps-1 pe-1 border rounded'>{quantity}</span>
                            <span className='ps-1 pe-1 border rounded' onClick={() => setQuantity(quantity + 1)}><BsPlus /></span>
                            <button className='btn btn-success rounded ms-3' onClick={addProduct}>Add To Cart</button>
                        </div>
                        <div className="productDetails mt-4">
                            <h4>Product Details</h4>
                            <p>{product.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
