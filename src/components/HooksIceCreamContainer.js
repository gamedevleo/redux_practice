import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {BuyIceCream} from '../redux/index';


function HooksIceCreamContainer (){
  const numOfIceCream = useSelector(state=>state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return(
    <div>
      <h2>Number of Ice Cream:{numOfIceCream}</h2>
      <button onClick={()=>dispatch(BuyIceCream(1))}>Buy 1 Ice Cream</button>
    </div>
)
}


export default HooksIceCreamContainer;
