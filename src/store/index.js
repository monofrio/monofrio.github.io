import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(/* middleware if any */))
);

export default store;
