import React from 'react'
import styled from 'styled-components'

const FooterBox = styled.div`
  margin: 8% auto 0;
  text-align: CENTER;
  p{
    color: #0f1645;
  }
  a{
    color: #7fa1e8;
    font-weight: bold;
    text-decoration: none;
  }
`

const Footer = () => (
  <FooterBox>
    <p>View source on <a href="https://github.com/rashmiap/personal-website-react">Github</a> | Designed by <a href="/">Natasha G</a></p>
  </FooterBox>
)

export default Footer
