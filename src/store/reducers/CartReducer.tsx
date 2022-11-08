const initialState = {
  products: [{id:0}],
  totalPrice: 0,
  totalQuantity: 0
}

export default function CartReduces(state = initialState, action: any) {

  switch (action.type) {
    case "AddTOCart":
      const { product, quantity } = action.payload;
      const checkProduct = state.products.find(pr => pr.id === product.id);
      if (checkProduct) {
        return state;
      } else {
        const tPrice = state.totalPrice + (product.discountPrice * quantity);
        const tQuantity = state.totalQuantity + quantity
        return { ...state, products: [...state.products, product], totalPrice: tPrice, totalQuantity: tQuantity }
      }

    default:
      return state;
  }
}
