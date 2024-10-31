import React, { useEffect } from 'react';
import { fetchUsers } from '../../redux/user/userActions';
import { useDispatch, useSelector } from 'react-redux';

const UsersList = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.users);
  console.log(state);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h2>UsersList</h2>
      {state.loading ? (
        <h5>loading...</h5>
      ) : state.error ? (
        <p>{state.error}</p>
      ) : (
        <div>
          {state.data &&
            state.data.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
        </div>
      )}
    </div>
  );
};

export default UsersList;
