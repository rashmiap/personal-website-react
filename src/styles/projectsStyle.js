import styled from 'styled-components'

export const ProjectsWrapper = styled.div`
  padding-top: 10%;
  padding-bottom: 5%;
`
export const ProjectsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 700px) {
    flex-direction: column;
    margin-bottom: 10%;
  }
  @media (min-width: 768px) and (max-width: 1030px) {
    flex-direction: column;
  }
`
