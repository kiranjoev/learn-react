import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const USER_LIST = [{ name: 'Kiran', age: 30, id: 1 }];
function App() {
  const [usersList, setUserList] = useState(USER_LIST);
  const addUserHandler = (user) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { ...user, id: Math.random() * 10 },
    ]);
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
