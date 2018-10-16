import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
import '../styles/stepper.css'
import styled from 'styled-components'
import work from '../data/Work'
import grad from '../data/Edu'
import lang from '../data/Language'
import hobby from '../data/Interests'

const ExperienceWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  color: #eeeeee;
  padding: 5% 0;
`
const WorkWrapper = styled.div`
  flex: 2;
  margin-right: 8%;
  h1{
    font-weight: 300;
    padding-bottom: 35px;
    margin-bottom: 35px;
    border-bottom: solid 1px #ffffff;
  }
`
const EdWrapper = styled.div`
  flex:1;
  h1{
    font-weight: 300;
    padding-bottom: 35px;
    margin-bottom: 35px;
    border-bottom: solid 1px #ffffff;
  }
`
const EdContent = styled.div`
  font-weight: 300;
  margin-bottom: 100px;
`
const Stepper = styled.div`
  padding-left: 50px;
`
const StepperHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3{
    margin: 2px;
    font-weight: 300;
  }
  a{
    font-size: 23px;
    font-weight: 300;
    color: #eeeeee;
    text-decoration: none;
  }
`
const LogoLink = styled.a`
  display: block;
  img{
    padding: 2%;
    display: flex;
  }
`
const StepperDesc = styled.div`
  max-width: 80%;
  p{
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
  }
  li{
    font-size: 16px;
    font-weight: 300;
    margin: 5px;
  }

`
const Experience = () => (
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Work Experience</h1>
      <div className="experience-stepper">
          {
            work.map(item => (<div key={item.id} className="step">
              <div>
                <div className="circle"></div>
                <div className="line"></div>
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.designation}</h3>
                    <a href={item.companyLink}>{item.name}</a>
                    <p>{item.dated}</p>
                  </div>
                  <LogoLink href={item.companyLink}>
                    <img src={item.logo} alt="company" width="175px"/>
                  </LogoLink>
                </StepperHead>
                <StepperDesc dangerouslySetInnerHTML={{__html: item.description}} />
              </Stepper>
              </div>
            ))
          }
    </div>
    </WorkWrapper>

    <EdWrapper>
      <h1>Education</h1>
      <EdContent>
        {
          grad.map(item => (<div key={item.id}>
            <p>Graduated with a {item.degree}'s Degree majored in {item.major} from {item.name} with a CGPA of {item.cgpa} <br/>
            {item.dated}</p>
            </div>))
        }
      </EdContent>
      <h1>Language</h1>
      <EdContent>
        {
          lang.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
      <h1>Interests</h1>
      <EdContent>
        {
          hobby.map(item => (<div key={item.id}>
            <p>{item.name}</p>
            </div>))
        }
      </EdContent>
    </EdWrapper>
  </ExperienceWrapper>
)

export default Experience
