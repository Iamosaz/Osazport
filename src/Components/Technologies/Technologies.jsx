import React from 'react'
import {RiReactjsLine} from "react-icons/ri"
import {RiTailwindCssLine} from "react-icons/ri"
import {RiHtml5Line} from "react-icons/ri"
import {RiJavascriptLine} from "react-icons/ri"
import {RiCss3Line} from "react-icons/ri"
import {RiGithubLine} from "react-icons/ri"

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
       <h2 className='text-center justify-center my-20 text-4xl'>Technologies I Have Worked With</h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiReactjsLine className='text-7xl text-cyan-400'/>
           </div>

           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiTailwindCssLine className='text-7xl text-sky-600'/>
           </div>

           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiHtml5Line className='text-7xl text-orange-600'/>
           </div>

           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiJavascriptLine className='text-7xl text-orange-400'/>
           </div>

           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiCss3Line className='text-7xl text-blue-500'/>
           </div>

           <div className='rounded-2xl border-4 border-neutral-800 p-3'>
              <RiGithubLine className='text-7xl text-black-100'/>
           </div>
        </div>
    </div>
  )
}

export default Technologies
