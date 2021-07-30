import React from 'react'

function Lists (props) {
  console.log(props.allLists)
  return (
    <div className ='list' >
      {(props.allLists).map((item, index) => {
        return (
          <div className='money' key = {index} >
            <h1> {item.title} </h1>
            <p> {(item.value).map((second, i) => {
              return (

                second.num > 1 ? <p>{second.title}{'s'} {second.num}</p> : <p>{second.title} {second.num}</p>

              )
            })} </p>
            <br></br>
          </div>
        )
      })}
    </div>
  )
}
export default Lists
