import styled from 'styled-components';

export const GameDesignersContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 30px;
`;

export const BlockDesign = styled.div`
  margin-top: 0;
  width: 350px;
  min-height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1d9982;
  border: 1px solid #115841;
  & h2 {
    color: #000E04;
    text-transform: uppercase;
  }
`;

export const BlockButton = styled.button`
  width: 90%;
  height: 50px;
  background: #008080;
  border: none;
  outline: none;
  margin-bottom: 3px;
  cursor: pointer;
  font-size: 28px;
  text-transform: uppercase;
`;

export const DeveloperBlock = styled.div`
  background: #000E04;
  width: 90%;
  min-height: 100px;
  margin-top: 0;
  & * {
    font-size: 18px;
    color: #249982;
  }
  & h5 {
    font-size: 26px;
    text-transform: uppercase;
    margin-bottom: 10px;
    margin-top: 20px;
    letter-spacing: 2.5px;
  }
  & p {
    margin-top: 0;
    margin-bottom: 10px;
  }
`;

export const ParagraphOccupation = styled.p`
  margin-bottom: 20px;
`

export const GoodDevelopers = styled.div`
  display: flex;
  margin-bottom: 5px;
  & p {
    cursor: pointer;
    margin-left: 6px;
    margin-right: 6px;
  }
`

