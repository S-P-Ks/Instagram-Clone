import { useRouter } from 'next/router'
import React from 'react'
import NavigationBar from './NavigationBar'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

function layout({ children }: any) {
    const withoutNavbar = ["/signin"]
    const router = useRouter()
    return (
        <div className='m-0 p-2 flex'>
            {!withoutNavbar.includes(router.pathname) && < NavigationBar />}
            {children}

        </div>
    )
}

export default layout