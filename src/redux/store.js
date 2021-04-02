//redux
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root.reducer";
//redux-persist
import { persistStore } from "redux-persist";
//redux-saga
//redux-saga
import { fetchCollectionStart } from "./shop/shop.sagas";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
	middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

//adding individual sagas
sagaMiddleware.run(fetchCollectionStart);

const persistor = persistStore(store);

export { store, persistor };
