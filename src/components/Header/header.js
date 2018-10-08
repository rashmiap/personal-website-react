import React from 'react'
import Link from 'gatsby-link'
import NavLink from './NavLink'

const headerList = [
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Experience',
    path: '/experience',
  },
  {
    label: 'Projects',
    path: '/projects',
  },
  {
    label: 'Contact',
    path: '/contact',
  }
];

const Header = () => (
  <nav className='nav'>
    <div className="nav-list">
      {
        headerList.map(navItem => (<NavLink info={navItem} key={navItem.label} />))
      }
    </div>
  </nav>
)

export default Header
