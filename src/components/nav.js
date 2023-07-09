import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// styles
const Header = styled.h1`
font-size: 50px;
`

const NavUl = styled.ul`
display: flex;
justify-content: left;
list-style: none;
gap: 40px;
align-items: center;
`

const Img = styled.img`
width: 80px;
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
      <Link to="/">
    <Img src="https://static.thenounproject.com/png/22971-200.png"></Img>
    </Link>
    <Header>Extremely Rare Beyblades</Header>
    
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