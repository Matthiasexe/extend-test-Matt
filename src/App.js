import './App.css'
import React from 'react' // use state allows you to add react state function components. always use at the top of a  react function.
import { Route, Link, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'

import CreateList from './ShoppingList/CreateList' // reminds me of object oriented programming. where you split up functions in differnt code files and put them all together in one code file
import Lists from './ShoppingList/Lists'

const Gumdrop = [
  'cookie',
  'cake',
  'pizza',
  'eggs',
]
console.log(Gumdrop.map((arg) => { return arg.includes('a') }))

function App () {
  return (
    <Router> {/* keeps UI in sync with the URL */}

      <div className='background'>
        <h1>{'Shopping Helper'}</h1>
        <div className="menu"> {/* allows you to seperate the code and cistomize it according to class name */}
          <ul>{/* makes an unordered list */ }
            <li><Link to="/"> {'CreateList'} </Link>  </li> {/* makes a list */}
            <li><Link to="/lists"> {'Lists'} </Link>  </li>
          </ul>

        </div>
        <div className="App-intro">
          <Switch> {/* makes path mathcing exclusive rather than inclusive. renders only the first route that matches the location */}
            <Route exact path="/"component={CreateList}/> {/* Route sends the webpage to whatever option the user chooses */}
            <Route path="/lists" component={Lists}/>
            <Redirect to="/"/> {/* navigates to new component if non existent path is entered */}
          </Switch>
        </div>
      </div>

    </Router>
  )
}

export default App
