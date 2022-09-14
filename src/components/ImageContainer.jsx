import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
padding: 30px;

    
`

const ImgContainer=styled.div`
display: flex;
align-items: center;
    justify-content: center;
    
`


const ImageContainer = () => {
  return (
    <Root>
      <ImgContainer>
      <img src="/images/illustration-intro.png"></img>
      </ImgContainer>
      
      
    </Root>
  );
}

export default ImageContainer;
