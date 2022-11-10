import { useSelector, useDispatch } from "react-redux"
import { BsDash, BsPlus, BsXCircleFill } from "react-icons/bs";

export default function AddToCart() {
  const { products, totalPrice, totalQuantity } = useSelector((state: any) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container mt-5">

        <div className="row pt-5">
          <h1>Your cart</h1>
          {
            products.length > 0 ?
              <>
                <div className="col-12 col-lg-8">
                  <table className="table table-striped">
                    <tr>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Inc/dec</th>
                      <th>Total Price</th>
                      <th>Remove</th>
                    </tr>
                    <tbody>
                      {
                        products.map((singleItem: any) =>
                          <>
                            <tr key={singleItem.id}>
                              <td><img src={`/images/${singleItem.image}`} style={{width:"100px",height:"40px",objectFit:"contain"}} alt="" /></td>
                              <td>{singleItem.name}</td>
                              <td>{singleItem.discountPrice}</td>
                              <td>
                                <div className="incDec d-flex justify-contents-between">
                                  <span className='ps-1 pe-1 border rounded' onClick={() => {dispatch({type:"DEC", id: singleItem.id})}}><BsDash /></span>
                                  <span className='ps-1 pe-1 border rounded'>{singleItem.quantity}</span>
                                  <span className='ps-1 pe-1 border rounded' onClick={() => {dispatch({type:"INC",id:singleItem.id})}}><BsPlus /></span>
                                </div>
                              </td>
                              <td>{singleItem.discountPrice * singleItem.quantity}</td>
                              <td onClick={() => {dispatch({type:"REMOVE", id:singleItem.id})}}><BsXCircleFill /></td>
                            </tr>
                          </>
                        )
                      }
                    </tbody>
                  </table>
                </div>
                <div className="col-12 col-lg-4">
                  <h4>Your cart summery</h4>
                  <div className="totalProduct">
                    <h6>Total Product: {totalQuantity}</h6>
                  </div>
                  <div className="totalPrice">
                    <h6>Total Price: {totalPrice}</h6>
                  </div>
                  <button>Checkout</button>
                </div>
              </>

              : "you dont Have any products"
          }
        </div>
      </div>
    </>
  )
}
