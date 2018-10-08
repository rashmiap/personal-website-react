import Link from 'gatsby-link'
import React from 'react'
import styled from 'styled-components'

const LinkNav = styled(Link)`
  color: #ffffff;
  margin-right: 35px;
  text-decoration: none;
  :hover{
    color: #7fa1e8;
  }
  &.active{
    color: #7fa1e8;
  }
`
const NavLink = ({ info }) => (
    <LinkNav
        to={info.path}
        activeClassName="active"
    >
        {info.label}
    </LinkNav>
);

export default NavLink;
