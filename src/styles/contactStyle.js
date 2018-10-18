import styled from 'styled-components'

export const ContactWrapper = styled.div`
  margin: 10% auto;
  @media (max-width: 700px) {
    margin: 15% auto;
  }
`;
export const ContactHeader = styled.h1`
  text-align: CENTER;
  color: #eeeeee;
  margin-bottom: 5%;
  font-weight: 300;
`
export const ContactDetails = styled.div`
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
export const ContactBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  font-weight: 300;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`
