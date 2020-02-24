import React, {useState, useEffect} from 'react'
import '../../App.scss';
import { ToDoWrapper, ToDoTopBlock, ToDoForm, ToDoInput, ToDoButton, ToDoErrorBlock, ToDoItems, ToDoItem } from "./elements";

const ToDoComponentFunc: React.FC = () => {
  const [name, setName] : React.ComponentState = useState('');
  const [age, setAge] : React.ComponentState = useState('');
  const [ageError, setAgeError] : React.ComponentState = useState('');
  const [occupation, setOccupation] : React.ComponentState = useState('');
  const [blockClass, setBlockClass] : React.ComponentState = useState('ErrorBlockNo');
  const [id, setId] : React.ComponentState = useState(0);
  const [items, setItems] : React.ComponentState = useState([]);

  function onChangeHumanName(event : any) {
    setName(event.target.value);
    console.log(name);
  }

  function onChangeAge(event : any) {
    setAge(event.target.value);
  }

  useEffect(() => {
    const ageArrCheck : Array<number> = [];
    for(let i = 0; i < age.length; i++) {
      if(isNaN(parseInt(age[i]))) {
        ageArrCheck.push(age[i]);
      }
    }
    if(ageArrCheck.length > 0) {
      setAgeError('Only numbers!');
      setBlockClass('ErrorBlock');
    } else {
      setAgeError('');
      setBlockClass('ErrorBlockNo');
    }
  }, [age]);

  function onChangeOccupation(event : any) {
    setOccupation(event.target.value);
  }

  function addItem(event : any) {
    event.preventDefault();
    setId(id + 1);
    items.push({
      name: name,
      age: age,
      occupation: occupation,
      id: id
    });
    let nameInput = document.querySelector('#name') as HTMLInputElement,
      ageInput = document.querySelector('#age') as HTMLInputElement,
      occupationInput = document.querySelector('#occupation') as HTMLInputElement;
    nameInput.value = '';
    ageInput.value = '';
    occupationInput.value = '';
    setName('');
    setAge('');
    setOccupation('');
  }

  function delItem(index : number, event : any) {
    event.preventDefault();
    const itemsArr : Array<object> = Object.assign([], items);
    itemsArr.splice(index, 1);
    setItems(itemsArr);
    console.log(itemsArr);
  }

  return(
    <ToDoWrapper>
      <ToDoTopBlock>
        <ToDoForm>
          <ToDoInput type="text" name="name" id="name" value={name} placeholder={'Name'} onChange={onChangeHumanName} required />
          <ToDoInput type="text" name="age" id="age" value={age} placeholder={'Age'} onChange={onChangeAge} required />
          { ageError !== '' && <span>{ageError}</span> }
          <ToDoInput type="text" name="occupation" id="occupation" value={occupation} placeholder={'Occupation'} onChange={onChangeOccupation} required />
          <ToDoErrorBlock className={blockClass}></ToDoErrorBlock>
          <ToDoButton type="submit" name="submit" id="submit" value={'Add item'} onClick={addItem}/>
        </ToDoForm>
        <p>Mouse Right Click - delete item</p>
      </ToDoTopBlock>
      <ToDoItems>
        { items.map( (item : any, index : number) => <ToDoItem key={index} onContextMenu={delItem.bind(index, index)}>
          <h3>{ item.name.length < 1 ? 'Name' : item.name }</h3>
          <p className={'item-age'}>{ item.age.length < 1 ? 0 : item.age }</p>
          <p className={'item-occupation'}>{ item.occupation.length < 1 ? 'Occupation' : item.occupation }</p>
        </ToDoItem> ) }
      </ToDoItems>
    </ToDoWrapper>
  );
}

export default ToDoComponentFunc;