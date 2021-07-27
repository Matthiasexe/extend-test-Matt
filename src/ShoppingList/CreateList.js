import React, {useState} from 'react'

const CreateList = (props) => {
  const [list, setList] = useState([]) // list stores value. set list updates the list
  const [inputData, setInputData] = useState('')
  const [listName, setlistName] = useState('')
  const [Num, setNum] = useState('')

  // const handleAddNumber = () => { // controls number box 9-13 as well as line 7
  //   const newNum = [...list, {title: Num}]
  //   setList([newNum])
  //   setNum('')
  // }
  const handleAddItem = () => {
    const newList = [...list, {title: inputData}]
    setList(newList)
    setInputData('')
    console.log(list)
  }

  const handleAddList = () => {
    props.setallLists((addList) => ([...addList, {title: listName, value: list.map((item) => item.title)}]))
    setList([])
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
      <input type='number' value={Num} onChange ={(event) => setNum(event.target.value)}/>

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
      <button onClick = {() => handleAddList()}>
        {'Save List'}
      </button>

    </div>
  )
}

export default CreateList
