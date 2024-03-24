import React, { useRef, useState } from 'react'
import Cards from './Cards'



function Foreground() {

  const ref = useRef();

  const data = [
    {desc:"This is File Description",filesize:"0.45MB",close:true,tag: {isOpen: true, tagTitle:"Download NOW", tagColor:"green"}},
    {desc:"This is File Description",filesize:"0.45MB",close:true,tag: {isOpen: true, tagTitle:"Download NOW", tagColor:"blue"}},
    {desc:"This is File Description",filesize:"0.45MB",close:true,tag: {isOpen: true, tagTitle:"Download NOW", tagColor:"green"}},
  ]

  return (

        <div ref={ref} className='fixed w-full h-screen top-0 left-0 z-[3] flex flex-wrap gap-7 p-5 '>
            {data.map((item,index)=>(
              <Cards data={item} refrence={ref}/>
            ))}
        </div>

  )
}

export default Foreground