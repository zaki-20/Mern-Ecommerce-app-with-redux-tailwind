import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {productListReducer} from "./reducers/productReducer"
import {cartReducer} from "./reducers/cartReducer"

const reducer = combineReducers({
  productList: productListReducer,
  cart: cartReducer

});


const initialState = {
  cart: {cartItem: "ZakiButt"}
};


  const middleware = [thunk];
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;