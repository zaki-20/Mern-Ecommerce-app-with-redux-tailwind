import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducers } from "./reducers/productReducer"
import { cartReducer } from "./reducers/cartReducer"
import { userLoginReducer, userRegisterReducer} from "./reducers/userReducer"

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo') ) : null
const cartItemsFromStorage = localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : []

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer

});


const initialState = {
  //  cart:{cartItems:"zakriaYasir"}
  cart: { cartItems: cartItemsFromStorage },
  userLogin: {userInfo: userInfoFromStorage}

};


const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;