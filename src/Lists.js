import React from 'react';
import { Link } from 'react-router-dom';
// Match covers if path ever changes

const List = ({ match }) => ( 
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
</div>
);

export default List;
