import styled from 'styled-components'

export const AppBlock = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Nav = styled.div`
  margin-top: 10px;
  
  & button {
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
    outline: none;
    border: 2px solid #08846D;
    color: #1D9982;
    font-size: 22px;
    text-transform: uppercase;
    font-weight: 800;
    background: transparent;
    transition: .2s;
    &:hover {
      color: #29A58E;
      border: 2px solid #1D9982;
    }   
    &:active {
      color: #08846D;
    }
  }
`;
