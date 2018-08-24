import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import RashSelfIcon from '../assets/images/rashmi.svg'
import linkedIn from '../assets/images/linkedin.svg'
import gmail from '../assets/images/gmail.svg'
import github from '../assets/images/github.svg'

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: inherit;
  font-family: fantasy;
  max-width: 70%;
  margin: 0 auto;
`;
const UserTitle = styled.h1`
  font-family: fantasy;
`;
const UserDescription = styled.p`
  border-bottom: 1px solid;
  padding-bottom: 20px;
`;
const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a{
    margin-right: 20px;
    opacity: 0.5;
  }
  a:hover{
    opacity: 1;
  }
  img{
    width: 40px;
  }
`;

const IndexPage = () => (
  <UserWrapper>
    <img src={RashSelfIcon} alt="rashmi self" />
    <div>
      <UserTitle>Rashmi ap</UserTitle>
      <UserDescription>Hi! I'm a frontend developer from Bangalore, India. Employed at ZoojooBE. </UserDescription>
    </div>
    <SocialWrapper>
      <a href="https://github.com/rashmiap"><img src={github} /></a>
      <a href="https://www.linkedin.com/in/rashmi-ap-601879b4/"><img src={linkedIn} /></a>
      <a href="mailto:rashmiap.10@gmail.com?Subject=SayHi%20again" target="_top"><img src={gmail} /></a>
    </SocialWrapper>
  </UserWrapper>
)

export default IndexPage
