import React from 'react'
import { CONTACT } from '../../constants'


const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
       <h2 className='text-center text-4xl my-4'>Get in Touch</h2>
       <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACT.address}</p>
        <p className='my-4'>{CONTACT.phoneNo}</p>
        <a href='#' className='border-b'>{CONTACT.email}</a>
       </div>
    </div>
  )
}

export default Contact
