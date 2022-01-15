import * as actions from "redux/CONSTANTS";
import * as api from "api/index";

export const createProduct = (product) => async (dispatch) => {
  dispatch({ type: actions.PRODUCT_CREATE_REQUEST, payload: product });

  try {
    const { data } = await api.createProductAPI(product);
    dispatch({ type: actions.PRODUCT_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCT_CREATE_ERROR, payload: error.message });
  }
};

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: actions.PRODUCTS_FETCH_REQUEST });

  try {
    const { data } = await api.fetchProducts();

    dispatch({ type: actions.PRODUCTS_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCTS_FETCH_ERROR, payload: error.message });
  }
};

// Get a single Product
export const getProduct = (id) => async (dispatch) => {
  dispatch({ type: actions.PRODUCT_FETCH_REQUEST, payload: id });

  try {
    const { data } = await api.fetchProduct(id);
    dispatch({ type: actions.PRODUCT_FETCH_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCT_FETCH_ERROR, payload: error.message });
  }
};

// Update a Product
export const updateProduct = (updatedData) => async (dispatch) => {
  dispatch({ type: actions.PRODUCT_UPDATE_REQUEST, payload: updatedData });

  try {
    const { data } = await api.updateProductAPI(updatedData);
    dispatch({ type: actions.PRODUCT_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.PRODUCT_UPDATE_ERROR, payload: error.message });
  }
};

// export const deleteProductStart = (productID) => ({
//   type: actions.PRODUCT_DELETE_START,
//   payload: productID,
// });
