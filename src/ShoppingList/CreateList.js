import React, {useState} from 'react'

function CreateList (props) {
  const [list, setList] = useState([]) // list stores value. set list updates the list
  const [inputData, setInputData] = useState('')

  const handleAddItem = () => {
    const newList = [...list, {title: inputData}]
    setList(newList)
    setInputData('')
    console.log(list)
  }

  const [allLists, setallLists] = useState([])
  const [listName, setlistName] = useState('')
  const handleAddList = () => {
    const addList = [...allLists, {title: listName, value: list.map((item) => item.title)}]
    setallLists(addList)
    setlistName('')
  }

  const handleRemoveItem = (index) => { /* removes data once it is clicked. this is also props */
    const newList = []
    for (let i = 0; i < list.length; i++) {
      if (index !== i) {
        newList.push(list[i])
      }
    }
    setList(newList)
  }

  return (

    <div className='input'>
      {/* insert router here */}
      <input type='text' value={inputData} onChange={(event) => setInputData(event.target.value)}/>{/* stores values entered into text box. will not save values unless "onChange is used" */}

      <input type='button' value="Create Shopping Item" onClick={() => handleAddItem()}/> {/* creates the button. saves datadue to onClick */}

      <div className='list'>

        {list.map((item, index) => {
          return (
            <div key={list.items}>

              <p onClick={() => handleRemoveItem(index)}> {item.title} </p> {/* removes item from list whenever we click it */}
            </div>

          )
        })}
      </div>

      <input type='text' value = {listName} onChange={(event) => setlistName(event.target.value)}/>
      <input type='button' value = "Create List Name" onClick = {() => handleAddList()}/>
      <div className="list">
        {allLists.map((item, pop) => {
          return (
            <p key={pop}> {item.title} {item.value} </p>

          )
        })}

      </div>
    </div>
  )
}

export default CreateList
