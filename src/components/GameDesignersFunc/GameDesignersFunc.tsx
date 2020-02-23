import React, {useState} from 'react'
import { GameDesignersContent, BlockDesign, BlockButton, DeveloperBlock, ParagraphOccupation, GoodDevelopers } from "./elements";

const GameDesignersFunc: React.FC = () => {
  const [appGameDevelopersNumber, setAppGameDevelopersNumber] : React.ComponentState = useState('No');
  const gameDevelopers = [
    {
      name : 'Neil Druckmann',
      company : 'Naughty Dog',
      age : 40,
      occupation : 'Vice President',
      isGoodGameDeveloper: 'true',
      id : 0
    },
    {
      name : 'Sam Houser',
      company : 'Rockstar Games',
      age : 48,
      occupation : 'President',
      isGoodGameDeveloper: 'true',
      id : 1
    },
    {
      name : 'Hideo Kojima',
      company : 'Kojima Productions',
      age : 56,
      occupation : 'President',
      isGoodGameDeveloper: 'Genius',
      id : 2
    }
  ];
  
  function renderAppDeveloperBlockClick1() {
    return setAppGameDevelopersNumber('0');
  }

  function renderAppDeveloperBlockClick2() {
    return setAppGameDevelopersNumber('1');
  }

  function renderAppDeveloperBlockClick3() {
    return setAppGameDevelopersNumber('2');
  }

  function renderItem(id : number) {
    return(
      <DeveloperBlock>
        <h5>{gameDevelopers[id].name}</h5>
        <p>Age: {gameDevelopers[id].age}</p>
        <p>Company: {gameDevelopers[id].company}</p>
        <ParagraphOccupation>Occupation: {gameDevelopers[id].occupation}</ParagraphOccupation>
      </DeveloperBlock>
    );
  }

  function isGoodDeveloper(data : string) {
    alert('Is good developer: ' + data);
  }

  return(
    <GameDesignersContent>
      <BlockDesign>
        <h2>Game Developers</h2>
        <div className="greenDesign_buttons">
          <BlockButton onClick={renderAppDeveloperBlockClick1}>
            {gameDevelopers[0].name}
          </BlockButton>
          <BlockButton onClick={renderAppDeveloperBlockClick2}>
            {gameDevelopers[1].name}
          </BlockButton>
          <BlockButton onClick={renderAppDeveloperBlockClick3}>
            {gameDevelopers[2].name}
          </BlockButton>
        </div>
        {(appGameDevelopersNumber === '0') ? renderItem(0) : null}
        {(appGameDevelopersNumber === '1') ? renderItem(1) : null}
        {(appGameDevelopersNumber === '2') ? renderItem(2) : null}
        <GoodDevelopers>
          {gameDevelopers.map((developer) => {
            return(
              <p onClick={() => {isGoodDeveloper(developer.isGoodGameDeveloper)}}>
                {developer.name}
              </p>
            )
          })}
        </GoodDevelopers>
      </BlockDesign>
    </GameDesignersContent>
  );
}

export default  GameDesignersFunc;