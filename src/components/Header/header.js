import React from 'react'
import NavLink from './NavLink'
import headerList from '../../data/Navigation'

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
