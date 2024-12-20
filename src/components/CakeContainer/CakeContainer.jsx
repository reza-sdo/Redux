import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../../redux/cake/cakeActions';

const CakeContainer = () => {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.cake);

  console.log(state);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>cake number : {state.numOfCakes} </h2>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(buyCake(value));
          setValue(0);
        }}
      >
        Buy Cake
      </button>
      {/* <button
        onClick={() => {
          dispatch({ type: 'BUY_CAKE', payload: 2 });
        }}
      >
        by two cake
      </button> */}
    </div>
  );
};

export default CakeContainer;
