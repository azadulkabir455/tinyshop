const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0
}

export default function CartReducer(state:any = initialState, action: any) {
  let findPro: any;
  let filterPro: any;
  let index: any;
  switch (action.type) {
    case "AddTOCart":
      const { product, quantity } = action.payload;
      console.log(product)
      const checkProduct = state.products && state.products.find((pr:any) => pr.id === product.id);
      if (checkProduct) {
        return state;
      } else {
        const tPrice = state.totalPrice + (product.discountPrice * quantity);
        const tQuantity = state.totalQuantity + quantity;
        const tProduct = [...state.products, product]
        product.quantity  = quantity;
        return { ...state, products: tProduct, totalPrice: tPrice, totalQuantity: tQuantity }
      }
    case "INC": {
      findPro = state.products.find((pr:any) => pr.id === action.id);
      index = state.products.findIndex((pr:any) => pr.id === action.id);
      findPro.quantity += 1;
      state.products[index] = findPro;
      return {
        ...state, totalPrice: state.totalPrice + findPro.discountPrice, totalQuantity: state.totalQuantity + 1
      }
    }
    case "DEC":
      findPro = state.products.find((pr:any) => pr.id === action.id);
      index = state.products.find((pr:any) => pr.id === action.id);
      findPro.quantity -= 1;
      state.products[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice - findPro.discountPrice,
        totalQuantity: state.totalQuantity - 1
      }
    case "REMOVE":
      findPro = state.products.find((pr:any) => pr.id === action.id)
      filterPro = state.products.filter((pr:any) => pr.id !== action.id)
      return {
          ...state,
          products: filterPro,
          totalPrice: state.totalPrice - (findPro.discountPrice * findPro.quantity),
          totalQuantity: state.totalQuantity - findPro.quantity,
      }
    default:
      return state;
  }
}
