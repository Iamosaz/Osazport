import React from 'react'
import { FaLinkedin, FaGithub, FaTiktok, FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      {/* Logo that links to homepage */}
      <a
        href="/"
        className='flex flex-shrink-0 items-center font-extrabold text-3xl text-white'
      >
        OSAZ.
      </a>

      {/* Social Media Icons as links */}
      <div className='m-5 flex items-center justify-center gap-5 text-3xl text-white'>
        <a href="https://www.linkedin.com/in/osazuwa-kenneth-3a8503299/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Iamosaz" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        {/* <a href="https://www.instagram.com/75techstore?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
          <FaTiktok />
        </a>
        <a href="https://www.instagram.com/YOUR_USERNAME" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a> */}
      </div>
    </nav>
  )
}

export default Navbar
