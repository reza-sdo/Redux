import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const CakeContainer = () => {
  const [value, setValue] = useState(0);
  const state = useSelector((state) => state.numOfCakes);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>cake number : {state} </h2>
      <input
        type="number"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: 'BUY_CAKE', payload: value });
          setValue(1)
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
