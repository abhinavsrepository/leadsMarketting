import React from 'react'
import LandingPage from './page'
import LandingPageNavbar from './components/LandingPageNavbar'

function LandingLayout ({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {

    return (
        <section className='flex min-h-screen flex-col overflow-x-clip'>
            <LandingPageNavbar/>
            <div className='flex-grow'></div>
        </section>
    )
}

    
  

export default LandingLayout