import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='h-full w-full flex flex-col gap-y-4 justify-center items-center'>
        <Image src="/logo.svg"  alt='Logo' width={120} height={120} className='animate-pulse duration-600' />
    </div>
  )
}

export default Loading