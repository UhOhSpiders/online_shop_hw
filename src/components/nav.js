import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// styles
const Header = styled.h1`
font-size: 50px;
`

const NavUl = styled.ul`
display: flex;
list-style: none;
gap: 10%;
align-items: center;
`

const linkStyle = {
display: 'flex',
color: '#071906',
padding: '20px',
backgroundColor: '#9BA2E8',
borderRadius: '10px',
};

const Nav = ({basket}) => {
  return (
    <>
    
    <NavUl>
    <Header>Rare Beyblades</Header>
        <li>
            <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
            <Link to="/basket" style={linkStyle}>Basket ({basket.length} items)</Link>
        </li>
    </NavUl>
    </>
  )
}

export default Nav