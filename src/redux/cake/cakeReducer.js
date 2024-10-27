import { BUY_CAKE } from './cakeTypes';

const initialCake = {
  numOfCakes: 10,
};
export default function cakeReducer(state = initialCake, actions) {
  switch (actions.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - actions.payload,
      };
    }
    default:
      return state;
  }
}
