import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productsReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    products:productsReducer,
});

let initialState = {};

const middleware = [thunk];

const Store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default Store