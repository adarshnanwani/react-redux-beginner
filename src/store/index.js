//Dependencies
import { createStore, combineReducers } from 'redux';
//Local imports
import counterReducer from '../reducers/counter';
import resultReducer from '../reducers/result';


const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

const store = createStore(rootReducer);

export default store;