import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import Name from '../../assets/images/Name2.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={Name} alt="2nd Logo" />
      </Link>
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#fff"
        size="3x"
        className="hamburger-icon"
      />
      <nav className={showNav ? 'mobile-show' : ''}>
      <div className='spaceBreak'>
      <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#fff"
          size="3x"
          className="close-icon"
        />
      </div>
        <NavLink
          exact="true"
          activeclassname="active"
          className="home-link"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#fff" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#fff" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jayponsford/"
            className="anchor-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#fff" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/JayPonsford"
            className="anchor-icon"

          >
            <FontAwesomeIcon icon={faGithub} color="#fff" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
