import styled from 'styled-components';

export const UserBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 50px;
`;

export const UserButton = styled.button`
  cursor: pointer;
  outline: none;
  width: 150px;
  height: 50px;
  background: transparent;
  border: 2px solid #EC513B;
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  transition: 0.2s;
  margin-bottom: 30px;
  &:hover {
    border-color: tomato;
  }
`;

export const UserInformationBlock = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: transparent;
  border: 2px solid #EC513B;
  margin-top: 0;
  & p {
    color: #fff;
    padding-left: 25px;
    padding-right: 25px;
    font-weight: 800;
    margin-bottom: 0px;
    margin-top: 10px;
  }
`;