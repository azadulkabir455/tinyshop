const initialState = {
    products: [
        {id:1, name:"Men shirt", image:"1.jpg", price: 20, discount:2, discountPrice: 20 - 2/ 100 * 20, quantity: 1, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:2, name:"Ladies Court", image:"2.jpg", price: 23, discount:3, discountPrice: 23 - 3/ 100 * 23, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:3, name:"Men Trouser", image:"3.jpg", price: 16, discount:4, discountPrice: 16 - 4/ 100 * 16, quantity: 2, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:4, name:"Men Shows", image:"4.jpg", price: 19, discount:2, discountPrice: 19 - 2/ 100 * 19, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:5, name:"Ladies Skirt", image:"5.jpg", price: 21, discount:3, discountPrice: 21 - 3/ 100 * 21, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:6, name:"Ladies shorts", image:"6.jpg", price: 25, discount:2, discountPrice: 25 - 2/ 100 * 25, quantity: 1, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:7, name:"Simple Trouser", image:"7.jpg", price: 23, discount:1, discountPrice: 23 - 1/ 100 * 23, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:8, name:"Men Jacket", image:"8.jpg", price: 31, discount:4, discountPrice: 31 - 4/ 100 * 31, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:9, name:"Men stripted shirt", image:"9.jpg", price: 34, discount:5, discountPrice: 34 - 5/ 100 * 34, quantity: 1, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."},
        {id:10, name:"Man Jacket", image:"10.jpg", price: 41, discount:4, discountPrice: 41 - 4/ 100 * 41, quantity: 3, description:"Uniquely leverage existing competitive vortals before web-enabled quality vectors. Credibly negotiate out-of-the-box information whereas accurate."}
    ]
}

const ProductReducer = (state = initialState, action:any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default ProductReducer;
