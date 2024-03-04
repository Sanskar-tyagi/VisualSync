interface DashboardLayoutProps{
    children:React.ReactNode
}; 
import React, { Suspense } from 'react'
import Sidebar from './_components/sidebar' 
import OrgSidebar from './_components/OrgSidebar'
import Navbar from './Navbar' 
import SimpleLoader from '@/components/Loaders/simple-loader'
const DashboardLayout = ({children}:DashboardLayoutProps) => {
  return (
    <Suspense fallback={<SimpleLoader/>}>
      <main className='h-full'>
        <Sidebar/>
        <div className="pl-[60px] h-full">
            <div className="flex gap-x-3 h-full">
           <OrgSidebar/>
            <div className="h-full flex-1">
<Navbar/>
        {children}
            </div>
            </div>
        </div>
    </main>
    </Suspense>
  )
}

export default DashboardLayout