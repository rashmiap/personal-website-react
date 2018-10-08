import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Header from '../components/Header/header'
import styled from 'styled-components'
import './index.css'
import favicon from '../assets/images/rash-favicon.png'
import blueBg from '../assets/images/blue-bg.svg'

const Wrapper = styled.div`
  background-image: url(${blueBg});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  background-position: bottom;
  padding: 5% 8%;
`;

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
      ]}
    />
    <Wrapper>
      <Header />
      {children()}
    </Wrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
