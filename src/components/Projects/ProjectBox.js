import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  max-width: 450px;
  width: 35%;
  min-height: 470px;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14),
            0 3px 1px -2px rgba(0,0,0,0.12),
            0 1px 5px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.3s ease-out;
  background-color: #fff;
  margin: 0 4% 4%;
  :hover {
    box-shadow:  0 8px 17px 2px rgba(0,0,0,0.14),
            0 3px 14px 2px rgba(0,0,0,0.12),
            0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
  }
  @media (max-width: 700px) {
    width: 100%;
    max-width: fit-content;
  }
`
const BoxIcon = styled.div`
  height: 120px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4%;
  box-sizing: border-box;
  background-color: rgba(127, 161, 232, 0.3);
  img{
    width: 15%;
    margin-right: 2%;
    margin-bottom: 0;
  }
  h3{
    margin: 0;
    color: #0f1645;
  }
`
const BoxDescription = styled.div`
  padding: 5%;
  flex-direction: column;
  display: FLEX;
  height: calc(100% - 120px);
  p{
    color: #0f1645;
  }
  a{
    color: #7fa1e8;
    font-size: 20px;
    font-weight: bold;
    display: block;
    margin:0 0 10px;
    text-decoration: none;
  }
  a:first-of-type{
    margin-top: auto;
  }
`
const ProjectBox = ({ info }) => (
    <Box>
      <BoxIcon>
        <img src={info.icon} />
        <h3>{info.title}</h3>
      </BoxIcon>
      <BoxDescription>
        <p> {info.description}</p>
        {
          info.githubPath != null ?
          <a href={info.githubPath}>On Github </a> : ''
        }
        {
          info.demoPath != null ?
          <a href={info.demoPath}>Project Demo </a> : ''
        }
        <p>Technology stack - {info.techUsed} </p>
      </BoxDescription>
    </Box>
);

export default ProjectBox;
