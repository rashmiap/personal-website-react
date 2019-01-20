import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
import AboutBox from '../components/About/AboutBox'
import about from '../data/About'
import { UserWrapper, UserTitle, UserDescription, DownloadButton, UserTopic } from '../styles/indexStyle.js'
import Layout from '../components/layout'

const IndexPage = () => {
  return <Layout>
  <UserWrapper>
    <UserTitle>Rashmi <span>AP</span></UserTitle>
    <UserDescription>
      <div>
        <p>
        Hello there, welcome to my portfolio. I am a
        front end developer, visual artist and an animal lover
        based out of Bangalore.
        </p>
        <DownloadButton href="https://github.com/rashmiap/personal-website-react/raw/master/RashmiAp-Resume.pdf"  download title="Resume">Download Resume</DownloadButton>
      </div>
      <img src={RashSelfIcon} alt="rashmi self" />
    </UserDescription>
    <UserTopic>
      {
        about.map(item => (<AboutBox key={item.id} info={item} />))
      }
    </UserTopic>
  </UserWrapper>
  </Layout>
}

export default IndexPage
