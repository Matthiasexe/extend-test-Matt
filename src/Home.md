import './App.css';
import React, {useState} from 'react' // use state allows you to add react state function components. always use at the top of a  react function. 
import { render } from '@testing-library/react';
import { BrowserRouter as Router} from 'react-router-dom';
import{
  Route, Link, Switch, Redirect
} from 'react-router-dom'

import Home from './Home'; // reminds me of object oriented programming. where you split up functions in differnt code files and put them all together in one code file 
import Lists from './Lists';
function App() {

  const [list, setList] = useState([]); // list stores value. set list updates the list
  const [inputData, setInputData] = useState('');

  const handleAddItem = () =>{   {/* takes values entered in the text feild amd reads it*/}
  const newList = [...list, {title: inputData}];
  setList(newList);
  setInputData('');
  console.log(list)
}

const handleRemoveItem = (index) => { {/* removes data once it is clicked */}
  const newList =[];
  for(let i = 0; i< list.length; i++){ 
    if (index != i){
      newList.push(list[i]);
    }
  }
  setList(newList);
}
const Home = () => (
    <div>
        <div className='input'>
       <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}/>{/* stores values entered into text box. will not save values unless "onChange is used" */}
       
       <input type='button' value="Create Shopping Item" onClick={() => handleAddItem()}/> {/* creates the button. saves datadue to onClick */}
       <input type='button' value="Save List"></input>{/* creates new button that saves list*/}
        </div>
          <br></br>
      <div className='list'>
             {list.map((item, index)=>{
               return(
                 <div>
                   
                   <p onClick={() => handleRemoveItem(index)}>{item.title}</p> {/* removes item from list whenever we click it*/}
                   </div>
               )
             })}
      </div>
    </div>
