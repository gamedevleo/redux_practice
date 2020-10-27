import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {BuyIceCream} from '../redux';



const NewHooksIceCreamContainer = ()=>{

  const [number,setNumber] = useState(1);

  const numOfIceCream = useSelector(state=>state.iceCream.numOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creaam:{numOfIceCream}</h2>
      <input type='number' value={number} onChange={e =>setNumber(e.target.value)} />
      <button onClick={()=>dispatch(BuyIceCream(number))}>Buy {number} Ice Cream</button>
    </div>
  )
}

export default NewHooksIceCreamContainer;
