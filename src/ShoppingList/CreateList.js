import React, {useState} from 'react'

const CreateList = (props) => {
  const [list, setList] = useState([]) // list stores value. set list updates the list
  const [inputData, setInputData] = useState('')
  const [listName, setlistName] = useState('')
  const [num, setNum] = useState('')

  const handleAddItem = () => {
    const newList = [...list, {title: inputData, num: num}] //, num > 1 ? 's' : ' '
    // const cheese = (newList) = { {num > 2 ? '${inputdata}s' : '${inputData}'}

    setList(newList)
    setInputData('')
    setNum('')
  }
  const javaExercise = [
    1,
    3,
    9,
    6,
    22,

  ]

  const javaFunction = (arg) => { return arg % 3 === 0 } // returns list of T or F if number is divisible by 3
  const javaBool = javaExercise.map(javaFunction)
  console.log(javaBool)

  const javaEven = (buns) => { return buns % 2 === 0 ? 'Even' : 'odd' } // J ex2
  const javaRen = javaExercise.map(javaEven)
  console.log(javaRen)

  const bummer = javaExercise.map((sasson) => // Jex 3
    <p key ={sasson.id}>
      {sasson}
    </p>)
  console.log(bummer)
  const handleAddList = () => {
    props.setallLists((addList) => ([...addList, {title: listName, value: list.map((item) => { return {title: item.title, num: item.num} })}]))
    setList([])
    setlistName('')
    console.log()
  }

  // const handleRemoveItem = (index) => {
  //   const newList = []
  //   for (let i = 0; i < list.length; i++) {
  //     if (index !== i) {
  //       newList.push(list[i])
  //     }
  //   }
  //   setList(newList)
  // }

  return (

    <div className='input'>

      <input type='text' value = {inputData} onChange={(event) => setInputData(event.target.value)}/>{/* stores values entered into text box. will not save values unless "onChange is used" */}
      <input type='number' value = {num} onChange ={(event) => setNum(event.target.value)}/>

      <button type='button' onClick={() => handleAddItem()}>{/* creates the button. saves datadue to onClick */}
        {'Create Shopping Item'}
      </button>

      <div className='list'>

        {list.map((item, index) => {
          return (
            item.num > 1 ? <p>{item.title}{'s'} {item.num}</p> : <p>{item.title} {item.num}</p>

          // <div key={list.items}>
          //   <p onClick={() => handleRemoveItem(index)} >  {item.title}  {item.num}  </p> {/* removes item from list whenever we click it */}
          //   {/* {(item.title).map((red)=> {(item.num) > 1? {'item.title'}'s' : {'item.title'}' ' })} */}
          // </div>

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
