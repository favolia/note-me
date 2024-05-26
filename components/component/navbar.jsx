import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { PiFlowerLotus } from "react-icons/pi";
import { LuSearch } from "react-icons/lu";
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    return (
        <nav
            className="z-50 sticky top-0 left-0 w-full flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <div className="flex items-center gap-4">
                <Link className="flex items-center gap-2" href="#">
                    <PiFlowerLotus className="size-8 text-gray-900 dark:text-gray-50" />
                    <span className="hidden sm:block text-sm sm:text-lg font-bold text-gray-900 dark:text-gray-50">NoteMe</span>
                </Link>
                <form className="relative">
                    <LuSearch
                        className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500 dark:text-gray-400" />
                    <Input
                        className="h-8 w-3/4 sm:w-[300px] rounded-md border border-gray-300 bg-gray-100 pl-9 text-sm focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-600"
                        placeholder="Search notes..."
                        type="search" />
                </form>
            </div>
            <Button className="rounded-full" size="icon" variant="ghost">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
            </Button>
        </nav>
    )
}

export default Navbar