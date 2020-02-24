import React, {useState, useEffect} from 'react'
import { UserButton, UserBlock, UserInformationBlock } from "./elements";

const UserComponentFunc : React.FC = () => {
  const [ user, setUser ] : React.ComponentState = useState([]);
  const [ showUserNumber, setShowUserNumber ] : React.ComponentState = useState('0');

  const getUser = async () : Promise<any> => {
    return await fetch('https://geekhub-frontend-js-9.herokuapp.com/api/users/all', {
      method: 'GET',
      headers: {
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTE5YzIyM2E0MTk5YzAwMjI3NTI2OGEiLCJpYXQiOjE1Nzk2ODc4OTl9.M5q83O_nP6B8SbfNKOs3CaQTu4JaQcbr_MgDLSgqnTU'
      }
    })
      .then((response) => {
        if(response.ok) {
          return response.json();
        }
        return response.json()
          .then(error => {
            const err : any = new Error('Something went wrong');
            err.data = error;
            return err;
          })
      })
  };

  const getUserButton = () => {

    getUser()
      .then(data => {
        sessionStorage.setItem('lektorium_hw_users', JSON.stringify(data));
      })
      .catch(error => {
        console.log(error);
      });

    let unparsedUsers : any = sessionStorage.getItem('lektorium_hw_users'),
      usersArray = JSON.parse(unparsedUsers);
    let randomId = Math.floor(Math.random() * usersArray.length);
    setUser(usersArray[randomId]);
    setShowUserNumber('1');
    console.log(user);
  };

  const returnUserInformation = () => {
    return(
      <UserInformationBlock>
        <p>Name: { user.name }</p>
        <p>Position: { user.position }</p>
        <p>Description: { user.description }</p>
        <p>Email: { user.email }</p>
        <p>Phone: { user.phone }</p>
        <p>Address: { user.address }</p>
      </UserInformationBlock>
    );
  }

  return (
    <UserBlock>
      <UserButton onClick={getUserButton}>Get User Information</UserButton>
      { showUserNumber === '1' ? returnUserInformation() : null }
    </UserBlock>
  )
};

export default UserComponentFunc;