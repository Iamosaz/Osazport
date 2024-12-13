import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaTiktok } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const Navbar = () => {
  return (
    <nav  className='mb-20 flex items-center justify-between py-6 '>
      <div className='flex flex-shrink-0 items-center font-extrabold text-3xl text-white'>
        OSAZ.
      </div>
      <div className='m-5 flex items-center justify-center gap-5 text-3xl text-white'>
        <FaLinkedin/>
        <FaGithub/>
        <FaTiktok/>
        <FaInstagram/>
      </div>
    </nav>
  )
}

export default Navbar
