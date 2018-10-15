import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const FooterBox = styled.div(props => ({
  // @media (max-width: '700px') {
  //   bottom: 0;
  //   padding: 5% 0 0;
  //   margin: 0 -8% -5% -8%;
  //   position: absolute;
  //   width: 100%;
  //   box-sizing: border-box;
  //   background-color: #eeeeee;
  // }
}));


const Footer = ({footerClass}) => (
  <div className={`defaultFooter ${footerClass}`}>
    <p>View source on <a href="https://github.com/rashmiap/personal-website-react">Github</a> | Designed by <a href="/">Natasha G</a></p>
  </div>
)
Footer.propTypes = {
  footerClass: PropTypes.string,
}
export default Footer
