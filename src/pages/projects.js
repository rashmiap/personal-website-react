import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../styles/tabs.css'
import styled from 'styled-components'
import hobbyProjects from '../data/HobbyProjects'
import proProjects from '../data/ProProjects'
import gradProjects from '../data/GradProjects'
import ProjectBox from '../components/Projects/ProjectBox'

const ProjectsWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 5%;
`
const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
`
const Projects = () => (
  <ProjectsWrapper>
    <Tabs>
      <TabList>
        <Tab>Professional</Tab>
        <Tab>Personal</Tab>
        <Tab>Undergrad</Tab>
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
      <TabPanel>
        <ProjectsSection>
          {
            gradProjects.map(item => (<ProjectBox key={item.id} info={item} />))
          }
        </ProjectsSection>
      </TabPanel>
    </Tabs>
  </ProjectsWrapper>
)

export default Projects
