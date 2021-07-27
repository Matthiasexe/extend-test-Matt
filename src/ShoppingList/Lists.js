import React from 'react'

function Lists (props) {
  return (
    <div className ='list' >
      {(props.allLists).map((item, index) => {
        return (
          <div key = {index} >
            <p> {item.title} </p>
            <p> {(item.value).map((second, i) => {
              return (
                <div className='Final' key = {i}>
                  <p>{second}</p>
                </div>
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
