import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
    <Link to='/aboutme'><button>About Me</button></Link>
    <Link to='/portfolio'><button>Portfolio</button></Link>
    <Link to='/contact'><button>Contact</button></Link>
    <Link to='/resume'><button>Resume</button></Link>
    </nav>
  )
}

export default Navbar