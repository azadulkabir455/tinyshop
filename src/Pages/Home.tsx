import { Link } from "react-router-dom"
import Header from "../GlobalCmp/Header"
import { useSelector } from "react-redux"

export default function Home() {
  const { products } = useSelector((state: any) => state.ProductReducer);
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          {
            products.map((singleItem: any) =>
              <div className="col-12 col-md-6 col-lg-4 mt-3">
                <div className="card singleProduct">
                  <Link to={`/product/${singleItem.id}`}><img src={`images/${singleItem.image}`} className="card-img-top" alt="..." /></Link>
                    <div className="card-body">
                      <h4>{singleItem.name}</h4>
                      <div className="d-flex justify-content-between contentPrice">
                        <div className="actualPrice">
                          <span>{singleItem.price}</span>
                          <span>{singleItem.discount}</span>
                        </div>
                        <div className="discountPrice">
                          <span>{singleItem.discountPrice}</span>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}
