import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../styles/tabs.css'
import styled from 'styled-components'
import hobbyProjects from '../data/HobbyProjects'
import proProjects from '../data/ProProjects'
import ProjectBox from '../components/Projects/ProjectBox'

const ProjectsWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 12%;
`
const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`

const Projects = () => (
  <ProjectsWrapper>
    <Tabs>
      <TabList>
        <Tab>Professional Projects</Tab>
        <Tab>Personal Projects</Tab>
      </TabList>

      <TabPanel>
        <ProjectsSection>
          {
            proProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
      <TabPanel>
        <ProjectsSection>
          {
            hobbyProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
    </Tabs>
  </ProjectsWrapper>
)

export default Projects
