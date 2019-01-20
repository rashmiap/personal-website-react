import React from 'react'
import SocialContact from '../components/Contact/SocialContact'
import contact from '../data/Contact'
import social from '../data/Social'
import { ContactWrapper, ContactHeader, ContactDetails, ContactBox } from '../styles/contactStyle.js'
import Layout from '../components/layout'

const Contact = () => (
  <Layout>
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
  </Layout>
)

export default Contact
