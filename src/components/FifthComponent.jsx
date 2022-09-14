import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 200px;
background-color: hsl(218, 28%, 13%);

`
const ImgContainer=styled.div`
`

const TextContainer=styled.div`
width: 400px;

color: white;
a{
    color: #006b80;
}
    
`

const FifthComponent = () => {
  return (
    <Root>
        <ImgContainer>
        <img src='/images/illustration-stay-productive.png'></img>
        </ImgContainer>
        <TextContainer>
            <h1>Stay Productive, wherever you are</h1>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <a href='#'>See how flyo works <img src='/images/icon-arrow.svg'></img></a>

            </TextContainer>     
    </Root>
  );
}

export default FifthComponent;
