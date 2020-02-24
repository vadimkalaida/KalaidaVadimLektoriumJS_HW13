import styled from 'styled-components';

export const ToDoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ToDoTopBlock = styled.div`
  width: 400px;
  height: 300px;
  background: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;
  & p {
    position: absolute;
    bottom: -10px;
    left: 5px;
    font-size: 14px;
  }
`;

export const ToDoForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  & span {
    color: #000E04;
  }
`;

export const ToDoInput = styled.input`
  width: 80%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  background: #000E04;
  color: #ffffff;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 10px;
  &::placeholder {
    color: #D0D0D0;
  }
`;

export const ToDoButton = styled.input`
  width: 25%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  background: #000E04;
  cursor: pointer;
  transition: .2s;
  margin-top: 15px;
  margin-bottom: 15px;
  &:hover {
    background: #122016;
  }
`;

export const ToDoErrorBlock = styled.div`
  width: 25%;
  height: 40px;
  position: absolute;
  bottom: 15px;
  background: transparent;
`;

export const ToDoItems = styled.div`
  width: 400px;
  height: 500px;
  overflow-x: hidden;
  overflow-y: auto;
  background: #ffffff;
  border-radius: 10px;
`;

export const ToDoItem = styled.div`
  width: 300px;
  height: 150px;
  background: black;
  margin-bottom: 25px;
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px;
  & * {
    color: #fff;
  }
  & h3 {
    padding-top: 15px;
    text-transform: uppercase;
  }
`;