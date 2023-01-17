import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
const generateUsers = () => {
  return [
    {id: 1 , name: 'sergi'},
    {id: 2 , name: 'ana'},
    {id: 3 , name: 'mari'},
    {id: 4 , name: 'lasha'},
    {id: 1 , name: 'giorgi'},
    {id: 2 , name: 'ana'},
    {id: 3 , name: 'mari'},
    {id: 4 , name: 'irakli'}
  ]
  
 }


export const App = () => {
 const [users, setUsers] = useState([]);
 

 
 useEffect(() => {
  console.log('generateUsers' , generateUsers());
  const userFromBe = generateUsers();
  setUsers(userFromBe)
 },[]);
 console.log("users", users);


 useEffect(() => {
  document.title = `${users.length} users left`;
 },[users]);
 console.log("users", users);
 const removeUser = () => {
  setUsers((prevUsers) => {
    const index = Math.floor(Math.random() * prevUsers.length)
    const newUserArray = prevUsers.filter((_, ind) => ind !== index)
    return newUserArray;
  });
 };
 
  return (
    <div className="App">
     <button onClick={removeUser}>remove users</button>
     {users.map(({ id, name}) => (
      <h1 key={id}>{name}</h1>
     )
     )}
    </div>
  );
}

export default App;
