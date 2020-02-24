import React, {useState} from 'react';
import './App.scss';
import { AppBlock, Nav } from './elements'
import FormComponentFunc from "./components/FormComponentFunc/FormComponentFunc";
import GameDesignersFunc from "./components/GameDesignersFunc/GameDesignersFunc";
import ToDoComponentFunc from "./components/ToDoComponentFunc/ToDoComponentFunc";
import UserComponentFunc from "./components/UserComponentFunc/UserComponentFunc";

const App : React.FC = () => {
  const [ currentPage, setCurrentPage ] : React.ComponentState = useState('clear');

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

  return (
    <AppBlock>
      <header className="App-header">
        <Nav>
          <button onClick={() => {
            setCurrentPage('clear');
          }}>Clear</button>
          <button onClick={() => {
            setCurrentPage('game_designers');
          }}>Game Designers</button>
          <button onClick={() => {
            setCurrentPage('form');
          }}>Form</button>
          <button onClick={() => {
            setCurrentPage('todo');
          }}>ToDo</button>
          <button onClick={() => {
            setCurrentPage('get_user');
            getUser()
              .then(data => {
                sessionStorage.setItem('lektorium_hw_users', JSON.stringify(data));
              })
              .catch(error => {
                console.log(error);
              });
          }}>Get User</button>
        </Nav>
      </header>
      { currentPage === 'clear' ? null : null }
      { currentPage === 'game_designers' ? <GameDesignersFunc /> : null }
      { currentPage === 'form' ? <FormComponentFunc /> : null }
      { currentPage === 'todo' ? <ToDoComponentFunc /> : null }
      { currentPage === 'get_user' ? <UserComponentFunc /> : null }
    </AppBlock>
  );
}

export default App;
