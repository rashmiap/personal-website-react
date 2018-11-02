import styled from 'styled-components'

export const ExperienceWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  color: #eeeeee;
  padding: 5% 0;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
export const WorkWrapper = styled.div`
  flex: 2;
  margin-right: 8%;
  h1{
    font-weight: 300;
    padding-bottom: 35px;
    margin-bottom: 35px;
    border-bottom: solid 1px #ffffff;
  }
  @media (max-width: 700px) {
    margin-right: 0;
  }
`
export const EdWrapper = styled.div`
  flex:1;
  h1{
    font-weight: 300;
    padding-bottom: 35px;
    margin-bottom: 35px;
    border-bottom: solid 1px #ffffff;
  }
  @media (max-width: 700px) {
    margin: 40px 0;
  }
`
export const EdContent = styled.div`
  font-weight: 300;
  margin-bottom: 100px;
  @media (max-width: 700px) {
    margin: 0 0 40px 0;
  }
`
export const Stepper = styled.div`
  padding-left: 50px;
  width: 100%;
  @media (max-width: 700px) {
    padding: 10px;
  }
`
export const StepperHead = styled.div`
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
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const LogoLink = styled.a`
  display: block;
  img{
    padding: 2%;
    display: flex;
  }
`
export const StepperDesc = styled.div`
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
  @media (max-width: 700px) {
    max-width: 100%;
  }
`
