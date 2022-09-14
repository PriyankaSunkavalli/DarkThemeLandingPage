import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
padding: 30px 0px;
`

const TextContainer=styled.div`
    color: white;
    text-align: center;
    width: 600px;
    margin-left: 400px;
    position: relative;
    button{
        height: 50px;
        width: 200px;
        background-color: blue;
        border-radius: 30px;
        border: none;
        color: white;
    }
`

const SecondImgContainer=styled.div`
    img{
        width: 100%;
        height: 320px;
        position: absolute;
    }
`

const SecondImageContainer = () => {
  return (
    <Root>
        <SecondImgContainer>
          <img src='images/bg-curvy-desktop.svg'></img>
      </SecondImgContainer>
    <TextContainer>
      <h1>All your files in one secure location, accessible anywhere.</h1>
      <p>Fylo stores all important files in one secure location</p>
      <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
      <button>Get Started</button>
      </TextContainer>
      
    </Root>
  );
}

export default SecondImageContainer;
