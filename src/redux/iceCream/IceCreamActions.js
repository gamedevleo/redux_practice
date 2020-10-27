import {BUY_ICECREAM} from './IceCreamTypes';

const BuyIceCream = number =>{
  return{
    type:BUY_ICECREAM,
    payload:number
  }
}

export default BuyIceCream;
