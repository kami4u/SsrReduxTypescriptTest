import { createStore, applyMiddleware, compose } from "redux";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    (typeof window !== "undefined" &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
  return process.env.NODE_ENV === "production"
    ? createStore(rootReducer, initialState, applyMiddleware(thunk))
    : createStore(
        rootReducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
      );
}
