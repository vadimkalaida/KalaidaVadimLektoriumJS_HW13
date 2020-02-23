import React, {useState} from 'react';
import './App.scss';
import { AppBlock, Nav } from './elements'
import FormComponentFunc from "./components/FormComponentFunc/FormComponentFunc";
import GameDesignersFunc from "./components/GameDesignersFunc/GameDesignersFunc";
import ToDoComponentFunc from "./components/ToDoComponentFunc/ToDoComponentFunc";

const App : React.FC = () => {
  const [ currentPage, setCurrentPage ] : React.ComponentState = useState('clear');
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
        </Nav>
      </header>
      { currentPage === 'clear' ? null : null }
      { currentPage === 'game_designers' ? <GameDesignersFunc /> : null }
      { currentPage === 'form' ? <FormComponentFunc /> : null }
      { currentPage === 'todo' ? <ToDoComponentFunc /> : null }
    </AppBlock>
  );
}

export default App;
