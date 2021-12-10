import storage from "redux-persist/lib/storage";
import {createMigrate, persistReducer, persistStore } from 'redux-persist';
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";

const migrations = {
    1: (state:any) => ({
        ...state
    })
}

const persistConfig = {
    key: 'root',
    blacklist: ["error"],
    storage,
    version: 1,
    migrate: createMigrate(migrations, {debug: true})
};

const reducers = () => combineReducers({});

const persistedReducer = persistReducer(persistConfig, reducers());

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export const persistoreFct = (store:any) => {
    return persistStore(store);
};