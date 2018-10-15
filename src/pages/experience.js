import React from 'react'
import RashSelfIcon from '../assets/images/rashmi.svg'
import '../styles/stepper.css'
import styled from 'styled-components'

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
    margin-bottom: 35px;
    border-bottom: solid 1px #ffffff;
  }
`
const EdWrapper = styled.div`
  flex:1;
`
const Experience = () => (
  <ExperienceWrapper>
    <WorkWrapper>
      <h1>Work Experience</h1>
      <div className="econsult-work__stepper">
          <div className="step">
            <div>
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div>djjdjd</div>
          </div>
          <div  className="step">
            <div>
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div>djjdjd</div>
          </div>
          <div  className="step">
            <div>
              <div className="circle"></div>
              <div className="line"></div>
            </div>
            <div>djjdjd</div>
          </div>
    </div>
    </WorkWrapper>

    <EdWrapper>
      <h1>Education</h1>
    </EdWrapper>
  </ExperienceWrapper>
)

export default Experience
