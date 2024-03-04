import React from 'react'
import NewButton from './NewButton'
import List from './List'

const Sidebar = () => {
  return (
    <div className='fixed z-[1] left-0 bg-blue-950 
    h-full w-[60px] flex p-3 flex-col gap-y-4'>
        <List/>
     <NewButton/>
    </div>
  )
}

export default Sidebar  
