import React from 'react';
import { Link, Route } from 'react-router-dom';
import List from './List';

/* Match covers if path ever changes*/

{/**delete here*/}
const Lists = ({ match }) => ( 
    <div className="menu2">
       <ul>
           {
               [...Array(5).keys()].map(n => {
                   return <li key={n}>
                       <Link to={`${match.url}/${n+1}`}> 
                           List {n+1}
                       </Link>
                   </li>
               })
           }
       </ul>
       <Route path={`${match.url}/:id(\\d+)`} component={List} />
   </div>
   );
   {/* stop delete here */}

export default Lists;
