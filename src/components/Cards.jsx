import React from 'react'
import { IoFileTrayFullOutline } from "react-icons/io5"
import { PiDownloadSimpleBold } from "react-icons/pi"
import { AiOutlineClose } from "react-icons/ai"
import {motion} from "framer-motion"

function Cards({data, refrence}) {
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale: 1.2}} className='relative w-60 h-72 bg-zinc-900/90 rounded-[45px] text-white p-7 overflow-hidden'>
        <IoFileTrayFullOutline/>
        <p className=' absolute text-sm mt-5 font-semibold leading-tight'> {data.desc} </p>
        <div className='footer absolute bottom-0 left-0 w-full  '>
            <div className='flex items-center justify-between mb-5 px-7 py-1'>
                <h5>{data.filesize}</h5>
                <span className='w-7 h-7 flex items-center justify-center bg-zinc-700 rounded-full'>
                  {data.close ? <AiOutlineClose/> : <PiDownloadSimpleBold/> }
                </span>
            </div>
            
              {data.tag.isOpen && (
                <div className={`tag w-full py-3 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                  <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                </div>
              )}
            
            
        </div>
    </motion.div>
  )
}

export default Cards