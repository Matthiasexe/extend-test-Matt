import './App.css';
import React, {useState} from 'react';
import{
   Link,
   Route,
   Switch,
   Redirect,
   BrowserRouter as Router
  } from 'react-router-dom'

  import CreateList from './components/CreateList/CreateList';
  import SavedLists from './components/SavedList/SavedLists';

  function App(){
    const[ allLists, setallLists] = useState([])
  return(
  <Router>
  <div className='app-page'>
    <div className='wrap'>
    <div className='header-card'>
    <header className='app-header'>
      <h1 className='app-title'>Shopping List V <img src="./images/Dark-3.png" alt="" height="55" width="45"/> </h1>
      </header>
    </div>
    </div>
      <div className='menu'>
        <ul>
        <li><Link to='/CreateList'>Create List</Link></li>
        <li><Link to='/SavedLists'>Saved Lists</Link></li>
        </ul>
      </div>
      <div className='app-intro'>
    <Switch>
      <Route exact path='/CreateList' component={CreateList}> <CreateList setallLists = {setallLists}/> </Route>
      <Route path='/SavedLists' component={SavedLists}> <SavedLists allLists = {allLists}/></Route>
      <Redirect to ='/CreateList' />
    </Switch>
      </div>
  </div>
  </Router>
  );
 }


export default App;// overhauled using things i learned in the extend-app
