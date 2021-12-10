import storage from "redux-persist/lib/storage";
import {createMigrate, persistReducer, persistStore } from 'redux-persist';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { products } from "./reducers/products/reducer";

const migrations = {
    1: (state:any) => ({
        ...state
    })
}

const persistConfig = {
    key: 'root',
    blacklist: ["products"],
    storage,
    version: 1,
    migrate: createMigrate(migrations, {debug: true})
};

const reducers = () => combineReducers({
    products
});

const persistedReducer = persistReducer(persistConfig, reducers());

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistoreFct = (store:any) => {
    return persistStore(store);
};