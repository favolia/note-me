import { cn } from '@/lib/utils'
import React from 'react'

const Container = ({ className, children }) => {
    return (
        <main className={cn("p-6 bg-gray-100 min-h-screen w-full text-sm sm:text-base", className)}>
            {children}
        </main>
    )
}

export default Container
