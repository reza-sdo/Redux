import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CakeContainer from './components/CakeContainer/CakeContainer';
import MilkContainer from './components/MilkContainer/MilkContainer';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <Provider store={store}>
      <div>App</div>
      <CakeContainer />
      <hr />
      <MilkContainer />
      <hr />
      <UsersList />
    </Provider>
  );
}

export default App;

// store  => actions => reducer
// all actions must be pure
