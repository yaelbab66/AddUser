import React, {useState} from 'react';
import './App.css';
import AddUser from './comp/AddUser';
import UsersList from './comp/UsersList';

function App() {

  const dummy_user = [];

  const [users, setNewUser] = useState(dummy_user);
  
  const addUserHandler = user => {
    setNewUser((newUser) => {
      return[user, ...newUser];
    });
  }



  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler}/>
      <UsersList item={users}/>
    </div>
  );
}

export default App;
