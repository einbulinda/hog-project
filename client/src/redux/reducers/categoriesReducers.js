import * as actions from "redux/CONSTANTS";

const INITIAL_STATE = {
  categories: [],
  category: {},
  errors: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.CATEGORIES_GET_SUCCESS:
      return {
        ...state,
        categories: action.payload,
      };
    case actions.CATEGORY_GET_SUCCESS:
      return { ...state, category: action.payload };
    case actions.CATEGORY_GET_ERROR:
      return { ...state, errors: action.payload };
    case actions.CATEGORIES_GET_ERROR:
      return { ...state, errors: action.payload };
    case actions.CATEGORY_CREATE_ERROR:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
