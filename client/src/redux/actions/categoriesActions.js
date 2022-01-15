import * as actions from "redux/CONSTANTS";
import * as api from "api/index";

// Create a Category
export const createCategory = (categoryData) => async (dispatch) => {
  dispatch({ type: actions.CATEGORY_CREATE_REQUEST, payload: categoryData });

  try {
    const { data } = await api.createCategory(categoryData);
    dispatch({ type: actions.CATEGORY_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.CATEGORY_CREATE_ERROR, payload: error.message });
  }
};

// Fetch All Categories
export const getAllCategories = () => async (dispatch) => {
  dispatch({
    type: actions.CATEGORIES_GET_REQUEST,
  });

  try {
    const { data } = await api.getCategories();

    dispatch({ type: actions.CATEGORIES_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.CATEGORIES_GET_ERROR, payload: error.message });
  }
};

// Get A Single Category
export const getCategory = (id) => async (dispatch) => {
  dispatch({ type: actions.CATEGORY_GET_REQUEST, payload: id });

  try {
    const { data } = await api.getCategory(id);
    dispatch({ type: actions.CATEGORY_GET_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actions.CATEGORY_GET_ERROR, payload: error.message });
  }
};

// Update Category
export const updateCategory = (updatedData) => async (dispatch) => {
  dispatch({ type: actions.CATEGORY_UPDATE_REQUEST, payload: updatedData });

  try {
    const { data } = await api.updateCategoryAPI(updatedData);
    dispatch({ type: actions.CATEGORY_UPDATE_SUCCESS });

    if (data) getAllCategories();
  } catch (error) {
    dispatch({ type: actions.CATEGORY_UPDATE_ERROR, payload: error.message });
  }
};

// export const deleteCategoryStart = (categoryID) => ({
//   type: actions.CATEGORY_DELETE_START,
//   payload: categoryID,
// });
