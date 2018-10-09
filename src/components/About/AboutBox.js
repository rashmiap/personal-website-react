import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const Box = styled.div`
  min-height: 287px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 3px 3px 4px 0 rgba(0, 0, 0, 0.5);
  padding: 3% 2%;
  margin-right: 3%;
  margin-bottom: 3%;
  width: 30%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  :last-of-type{
    margin-right: 0;
  }
  a{
    margin-top: auto;
    color: #7fa1e8;
    text-decoration: none;
  }
  @media (max-width: 700px) {
    width: 100%;
    min-height: auto;
    padding: 5%;
  }
`
const AboutBox = ({ info }) => (
    <Box>
      <h3>{info.title}</h3>
      <p> {info.description}</p>
      <Link
          to={info.path}>
          Read more
      </Link>
    </Box>
);

export default AboutBox;
