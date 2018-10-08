import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import RashSelfIcon from '../assets/images/rashmi.svg'
import linkedIn from '../assets/images/linkedin.svg'
import gmail from '../assets/images/gmail.svg'
import github from '../assets/images/github.svg'

const UserWrapper = styled.div`
  margin: 10% auto;
`;
const UserTitle = styled.h1`
  font-size: 6em;
  font-weight: bold;
  color: #ffffff;
  span{
    color: #7fa1e8;
  }
`;
const UserDescription = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  p{
    color: #ffffff;
    max-width: 90%;
    font-weight: 300;
    font-size: 26px;
    line-height: 1.3;
    margin-bottom: 15%;
  }
  img{
    max-width: 50%;
  }
`;
const DownloadButton = styled.div`
  width: 298px;
  height: 71px;
  background-color: rgba(188, 188, 188, 0.1);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: CENTER;
  color: #ffffff;
  cursor: pointer;
  :hover{
    color: #7fa1e8;
  }
`


const IndexPage = () => (
  <UserWrapper>
    <UserTitle>Rashmi <span>AP</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a
        front end developer, visual artist and an animal lover
        based out of Bangalore.
        </p>
        <DownloadButton>Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="rashmi self" />
    </UserDescription>
  </UserWrapper>
)

export default IndexPage
