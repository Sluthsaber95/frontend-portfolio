import React from 'react'
import PakageIcon from './pakage-logo-small.png'
import PropTypes from 'prop-types'
import "./index.css"

const NavBar = ({ icon }) => {
  return (
    <div className="nav-bar">
      <img src={icon} />
    </div>
  )
}

NavBar.propTypes = {
  icon: PropTypes.string
}
NavBar.defaultProps = {
  icon: PakageIcon
}
export default NavBar