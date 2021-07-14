import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react' // use state allows you to add react state function components. always use at the top of a  react function. 

function App() {

  const [list, setList] = useState([]);
  const [inputData, setInputData] = useState('');

  const handleAddItem = () =>{   {/* takes values entered in the text feild amd reads it*/}
  const newList = [...list, {title: inputData}];
  setList(newList);
  setInputData('');
  console.log(list)
}

const handleRemoveItem = (index) => { {/* removes data once it is clicked */}
  const newList =[];
  for(let i = 0; i< list.length; i++){ // if value is plus one it will delete?
    if (index != i){
      newList.push(list[i]);
    }
  }
  setList(newList);
}
  return (
    <div className='App-header'>
      <h1>My Shopping List</h1>
      <div className='input'>
       <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}/>{/* stores values entered into text box. will not save values unless "onChange is used" */}
       
       <input type='button' value="Create Shopping Item" onClick={() => handleAddItem()}/> {/* creates the button. saves datadue to onClick */}
        </div>
          
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

  );
}

export default App;
