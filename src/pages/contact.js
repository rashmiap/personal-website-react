import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SocialContact from '../components/Contact/SocialContact'
import contact from '../data/Contact'
import social from '../data/Social'

const ContactWrapper = styled.div`
  margin: 10% auto;
  @media (max-width: 700px) {
    margin: 15% auto;
  }
`;
const ContactHeader = styled.h1`
  text-align: CENTER;
  color: #eeeeee;
  margin-bottom: 5%;
  font-weight: 300;
`
const ContactDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  h3{
    font-size: 30px;
    color: #7fa1e8;
    font-weight: 300;
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
const Contact = () => (
  <ContactWrapper>
    <ContactHeader>Get in touch</ContactHeader>
    <ContactDetails>
        <ContactBox>
          <h3>Contact Details</h3>
          {
            contact.map(item => (<SocialContact key={item.id} info={item} />))
          }
        </ContactBox>
        <ContactBox>
          <h3>Look me up online</h3>
          {
            social.map(item => (<SocialContact key={item.id} info={item} />))
          }
        </ContactBox>
    </ContactDetails>
  </ContactWrapper>
)

export default Contact
