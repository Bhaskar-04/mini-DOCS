import React from 'react'

function Background() {
  return (
    <>
      <div className='fixed w-full h-screen z-[2]'>
        <div className='absolute py-8 top-[5%] flex justify-center w-full font-semibold text-[2vw]'>Documents.</div>
        <h1 className='absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter text-zinc-900 font-semibold'>Docs.</h1>
      </div>
    </>
  )
}

export default Background