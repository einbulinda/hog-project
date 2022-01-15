import * as actions from "redux/CONSTANTS";

const INITIAL_STATE = {
  products: [],
  loading: false,
  product: {},
  errors: [],
};

const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.PRODUCT_CREATE_REQUEST:
      return { ...state, loading: true };
    case actions.PRODUCT_CREATE_SUCCESS:
      return { ...state, loading: false };
    case actions.PRODUCTS_FETCH_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case actions.PRODUCT_FETCH_SUCCESS:
      return { ...state, product: action.payload };
    case actions.PRODUCT_FETCH_ERROR:
    case actions.PRODUCTS_FETCH_ERROR:
    case actions.PRODUCT_CREATE_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default productReducer;
