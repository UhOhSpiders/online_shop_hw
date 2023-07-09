import React from 'react'
import {Link} from 'react-router-dom';

const Nav = ({basket}) => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/basket">Basket ({basket.length} items)</Link>
        </li>
    </ul>
  )
}

export default Nav