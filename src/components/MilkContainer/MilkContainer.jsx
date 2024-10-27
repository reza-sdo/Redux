import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyMilk } from '../../redux/milk/milkActions';

const MilkContainer = () => {
  const milkState = useSelector((state) => state.milk);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>milk Is : {milkState.numOfMilk}</h2>
      <button onClick={() => dispatch(buyMilk(1))}>click to buy </button>
    </div>
  );
};

export default MilkContainer;
