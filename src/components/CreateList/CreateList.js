import React,{useState} from 'react';
import './CreateList.css'

function CreateList (props) {

  const [list, setList] = useState([]) // list stores value. set list updates the list
  const [inputData, setInputData] = useState('')
  const [listName, setlistName] = useState('')
  const [num, setNum] = useState('')

    const handleAddItem = () => {
    const newList = [...list, {title: inputData, num: num}]

    setList(newList)
    setInputData('')
    setNum('')
  }

    const handleAddList = () => {
    props.setallLists((addList) => ([...addList, {title: listName, value: list.map((item) => { return {title: item.title, num: item.num} })}]))
    setList([])
    setlistName('')
    console.log()
  }
  const handleRemoveItem = (index) => {
    const newList = []
    for (let i = 0; i < list.length; i++) {
      if (index !== i) {
        newList.push(list[i])
      }
    }
    setList(newList)
  }

  return(
<div className='page-background'>
 <div className='List-Card'>
  <div className='Shopping-Item-Box'>
     <input type='text' value = {inputData} onChange={(event) => setInputData(event.target.value)} placeholder='Add an item' className='item-input'/>
     <input type='number' value = {num} onChange={(event) => setNum(event.target.value)}placeholder='How many?' className='number-input'/>
     <button type='button' onClick={() => handleAddItem()} className = 'small-btn'>
         {'Create'}
     </button>
     <div class="toolTip" data-tooltip="Click your item to delete it and start over!"> <img src="./images/Question-mark.png" alt="" class="toolTip"/></div>
  </div>
      {list.map((item,index) => {
     return(
    <div key={index}>
         <p onClick={() => handleRemoveItem(index)}>
             {item.title} {item.num}
         </p>
    </div>
     )
      })}
  
  <div className='Save-List-Box'>
   <input type='text' value = {listName} onChange={(event) => setlistName(event.target.value)} placeholder='Enter a list Name' className='list-name-input'/>
      <button onClick = {() => handleAddList()} className='med-btn'>
        {'Save List'}
      </button>
  </div>
  </div>
  </div>
  )
}



export default CreateList;
