import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
background-color: hsl(216, 53%, 9%);
padding: 200px 100px 100px 100px;
/* position: relative; */
`
const FirstContainer=styled.div`
padding: 20px;
img{
    padding: 20px;
}
p{
    width: 200px;
}
    
`
const SecondContainer=styled.div`
padding: 20px;
img{
    padding: 0px 20px;
}
    
`
const ThirdContainer=styled.div`
padding: 20px;
    
`
const FourthContainer=styled.div`
padding: 20px;
    
`
const FifthContainer=styled.div`
img{
    padding: 20px;
}
    
`
const TextContainer=styled.div`
color: white;
display: flex;
align-items: center;
justify-content: space-evenly;
    
`

const PhoneContainer=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SixthComponent = () => {
  return (
    <Root>
      <img src='/images/logo.svg'></img>
      <TextContainer>
          <FirstContainer>
              <PhoneContainer>
              <img src='/images/icon-location.svg'></img>
              <p>
                  ere ewre ewrqe ereq erqer wedwgr erfda grrfg sads dfdf dsfdsaf sd dsfas dsfd
              </p>
              </PhoneContainer>
          </FirstContainer>
          <SecondContainer>
              <PhoneContainer>
              <img src='/images/icon-phone.svg'></img>
              <p>15-23-456-45</p>

              </PhoneContainer>
              <PhoneContainer>
              <img src='/images/icon-email.svg'></img>
              <p>exampleinfo.com</p>

              </PhoneContainer>
          </SecondContainer>
          <ThirdContainer>
              <p>About us</p>
              <p>Jobs</p>
              <p>Press</p>
              <p>Blog</p>

          </ThirdContainer>
          <FourthContainer>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Privacy</p>

          </FourthContainer>
          <FifthContainer>
              <img src='/images/icon-phone.svg'></img>
              <img src='/images/icon-phone.svg'></img>
              <img src='/images/icon-phone.svg'></img>

          </FifthContainer>
      </TextContainer>
    </Root>
  );
}

export default SixthComponent;
