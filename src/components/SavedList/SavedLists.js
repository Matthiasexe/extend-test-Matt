import React from 'react';
import './SavedList.css'
function SavedLists (props) {
return (
    <div className = 'Saved-List-Page'> {/*where all list cards will be stored*/}
     {(props.allLists).map((item, index) => {
         return(
          <div className = 'Saved-List-Cards' key = {index}>
              <h1> {item.title} </h1>
              <p> {(item.value).map((second,i) => {
                  return(
                      <p>{second.title + (second.num > 1 ? `s` : '')} {second.num}</p>
                  )
              })}</p>
              <br></br>
          </div> 
         )
     })}
    </div>
)
}
export default SavedLists;
