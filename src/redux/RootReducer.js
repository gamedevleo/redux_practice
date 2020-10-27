import {combineReducers} from 'redux';
import iceCreamReducer from './iceCream/IceCreamReducer';
import cakeReducer from './cakes/CakeReducer';


const rootReducer = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreamReducer
})


export default rootReducer;
