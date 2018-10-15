import React from 'react'
import rec from '../data/Recommendation'
import styled from 'styled-components'
import RashSelfIcon from '../assets/images/rashmi.svg'

const RecWrapper = styled.div`
  padding: 5%;
  >h1{
    color: #fff;
    padding-bottom: 30px;
    border-bottom: 1px solid #fff;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    padding: 10% 0 20%;
  }
`
const RecBox = styled.div`
  margin-top: 10%;
  color: white;
  h3{
    margin: 0;
    font-weight: 300;
  }
  hr{
    background: #7fa1e8;
    width: 15%;
    height: 3px;
    margin: 3% 0;
  }
  >p:first-of-type{
    font-size: 18px;
    margin: 0;
    font-weight: 300;
  }
  >p:nth-of-type(2){
    font-size: 16px;
    font-weight: 300;
  }
`
const RecDes = styled.p`
  margin: 2% 0;
  font-weight: 300;
`
const Recommendation = () => (
  <RecWrapper>
    <h1>Recommendation</h1>
    {
      rec.map(item => (<RecBox key={item.id} >
      <h3>{item.name}</h3>
        <p>{item.designation}</p>
        <p>{item.dated}</p>
        <RecDes>{item.description}</RecDes>
        <hr/>
      </RecBox>
      ))
    }
  </RecWrapper>
)

export default Recommendation
