import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';

const Root=styled.div`
background-color: hsl(218, 28%, 13%);
padding: 50px;
    
`
const GridCol=styled.div`
text-align: center;
color: white;
width: 700px;
margin-left: 300px;

`
const CustomCol=styled(Col)`
    padding: 40px;
    h4{
        font-size: 16px;
    }
    p{
        font-size: 12px;
    }
    
`

const GridContainer = () => {
  return (
    <Root>
      <GridCol>
      <Row>
          <CustomCol lg={6}>
              <img src='/images/icon-access-anywhere.svg'></img>
              <h4>Access your files, anywhere</h4>
              <p>Access them whereever you need, share and CustomCollaborate wirh friends family, and coworkers.</p>
          </CustomCol>
          <CustomCol lg={6}>
          <img src='/images/icon-security.svg'></img>
          <h4>Access your files, anywhere</h4>
              <p>Access them whereever you need, share and CustomCollaborate wirh friends family, and coworkers.</p>
          </CustomCol>
          <CustomCol lg={6}>
          <img src='/images/icon-collaboration.svg'></img>
          <h4>Access your files, anywhere</h4>
              <p>Access them whereever you need, share and CustomCollaborate wirh friends family, and coworkers.</p>
          </CustomCol>
          <CustomCol lg={6}>
          <img src='/images/icon-any-file.svg'></img>
          <h4>Access your files, anywhere</h4>
            <p>Access them whereever you need, share and CustomCollaborate wirh friends family, and coworkers.</p>
          </CustomCol>

      </Row>
      </GridCol>
    </Root>
  );
}

export default GridContainer;
