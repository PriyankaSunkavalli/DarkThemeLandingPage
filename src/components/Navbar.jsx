import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 50px;
`
const RightHeader=styled.div`
    a{
        text-decoration: none;
        margin-left: 30px;
        color: white;
    }
`

const Navbar = () => {
  return (
    <Root>
      <img src='/images/logo.svg'></img>
      <RightHeader>
          <a href='#'>Features</a>
          <a href='#'>Team</a>
          <a href='#'>Sign In</a>

      </RightHeader>
    </Root>
  );
}

export default Navbar;
