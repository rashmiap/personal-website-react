import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { siteMeta } from '../data/Seo'
import Helmet from 'react-helmet'
import favicon from '../assets/images/rash-favicon.png'
import blueBg from '../assets/images/blue-bg.png'
import { Location } from '@reach/router'

// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'

import '../layouts/index.css'
import Header from './Header/header';
import Footer from './Footer/footer';

const Wrapper = styled.div`
  background-image: url(${blueBg});
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  height: auto;
  background-position: bottom;
  padding: 5% 8%;
  position: relative;
  @media (max-width: 700px) {
    min-height: 100vh;
    height: auto;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: siteMeta.description },
          { name: 'keywords', content: siteMeta.keywords.join(", ") },
          { name: 'author', content: siteMeta.author },
          { name: 'copyright', content: siteMeta.copyright },
        ]}
        link={[
          { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
        ]}
      />
        <Location>
        {({ location }) => {
          return <Wrapper className={location.pathname === "/" ? "cutBackground" :''}  >
          <Header />
            {children}
          <Footer footerClass={location.pathname === "/" ? 'footerInitial' :'footerAbsolute'} />
        </Wrapper>
        }}
        </Location>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
