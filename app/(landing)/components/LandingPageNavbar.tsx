import React from 'react'
import {User} from '@clerk/nextjs/api'
import { SignInButton, UserButton, currentUser } from '@clerk/nextjs'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

async function LandingPageNavbar() {
  const user: User | null = await currentUser()
  console.log("User,user")
  
  return (
    <nav className='flex w-screen items-center justify-between p-6 '>
      <div>
        <Link className="text-2xl font-bold text-purple-500 no-underline" href='/'> IrisLeads
        </Link>
      </div>
      <div className='text-purple-500 font-semibold text-lg'>
        {user?(
        <div className='flex flex-row gap-x-4 items-center'>
            <Link href="/lead-magnets">
            <Button variant='outline'>Open App </Button>
            </Link>
            <UserButton/>
            </div>):(
              <SignInButton/>
            )
        }
      </div>
    </nav>
  )
}

export default LandingPageNavbar