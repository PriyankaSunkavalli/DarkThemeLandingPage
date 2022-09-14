import React from 'react';
import styled from 'styled-components';

const Root=styled.div`
background-color: hsl(218, 28%, 13%);
padding: 50px 100px 200px 100px;
    
`
const Card=styled.div`
    height: 200px;
    width: 350px;
  background-color: hsl(217, 28%, 15%);
  border-radius: 10px;
  color: white;
  padding: 30px;
  img{
      height: 40px;
      width: 40px;
      border-radius: 50%;
  }
    
`

const CardContainer=styled.div`
display: flex;
  align-items: center;
  justify-content: space-evenly;
    
`
const CardFooter=styled.div`
display: flex;
align-items: center;
color: white;
border: 0;
    
`
const Title=styled.div`
border: 0;
padding: 20px;
h4{
    font-size: 14px;
}
p{
    font-size: 10px;
}
    
`
const EarlyCard=styled.div`
    height: 200px;
    width: 600px;
  background-color: hsl(217, 28%, 15%);
  border-radius: 10px;
  color: white;
  text-align: center;
  padding: 30px;
  margin-top: 100px;
  position: absolute;
  left: 0; 
  right: 0; 
  margin-left: auto; 
  margin-right: auto; 
`
const InputContainer=styled.div`
display: flex;
align-items: center;
justify-content: space-between;
input{
    height: 40px;
    width: 300px;
    border: none;
    border-radius: 30px;
    padding: 10px;
}
button{
    height: 40px;
    width: 180px;
    border: none;
    border-radius: 30px;
    background-color: lightblue;
    color: white;
}
    
`

const CardsComponent = () => {
  return (
    <Root>
        <img src='/images/bg-quotes.png'></img>
        <CardContainer>
        <Card>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <CardFooter>
                <img src='/images/profile-1.jpg'></img>
                <Title>
                    <h4>Sahil</h4>
                    <p>Founder & CEO</p>
                </Title>
            </CardFooter>
        </Card>
        <Card>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <CardFooter>
                <img src='/images/profile-2.jpg'></img>
                <Title>
                    <h4>Sahil</h4>
                    <p>Founder & CEO</p>
                </Title>
            </CardFooter>
        </Card>
        <Card>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <CardFooter>
                <img src='/images/profile-3.jpg'></img>
                <Title>
                    <h4>Sahil</h4>
                    <p>Founder & CEO</p>
                </Title>
            </CardFooter>
        </Card>
        </CardContainer>
        <EarlyCard>
            <h2>Get Early Access Today</h2>
            <p>Access them whereever you need, share and collaborate wirh friends family, and coworkers.</p>
            <InputContainer>
            <input type='text' placeholder='emainexample.com'></input>
            <button>
                Get Started for free
            </button>
            </InputContainer>


        </EarlyCard>
      
    </Root>
  );
}

export default CardsComponent;
