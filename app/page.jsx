"use client";
import Container from "@/components/component/container";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon, PlusIcon, Share1Icon, TrashIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Home() {
  const [isOpenNoteList, setIsOpenNoteList] = useState(false);

  return (
    <Container className={"flex flex-col sm:h-screen sm:flex-row gap-6"}>
      <div className={`${isOpenNoteList ? 'h-[40rem] lg:h-full' : 'h-16'} flex flex-col min-w-full sm:min-w-[18.7rem] sm:w-[18.7rem] overflow-hidden p-4 transition-all ease-in-out duration-700 rounded-lg bg-white`}>
        <div className="flex items-center mb-4">
          <h2 onClick={() => setIsOpenNoteList(prev => !prev)} className="cursor-pointer text-lg font-medium h-full flex items-center w-full text-gray-900 dark:text-gray-50">Notes</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="min-w-9 min-h-9" size="icon" variant="ghost">
                <DotsHorizontalIcon className={"transition ease-out duration-500 h-5 w-5 text-gray-500 dark:text-gray-400"} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>Public Note</DropdownMenuItem>
              <DropdownMenuItem>Your Note</DropdownMenuItem>
              <DropdownMenuItem>Create Note</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="h-full overflow-hidden">
          <ScrollArea className="h-full grid gap-4">
            {[...Array(10)].map((v, i) => (
              <Link key={1} className="flex items-start gap-4 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
                <div className="flex-shrink-0">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-medium text-gray-900 dark:text-gray-50">Grocery List</h3>
                  <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                    Eggs, milk, bread, apples, bananas, chicken, rice, pasta...
                  </p>
                  <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">2 hours ago</p>
                </div>
              </Link>
            ))}
          </ScrollArea>
        </div>
      </div>

      <div className="w-full h-full rounded-lg bg-white p-4 sm:p-8 shadow-sm dark:bg-gray-950 dark:shadow-none">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Note Details</h2>
          <div className="flex gap-2">
            <Button size="icon" variant="ghost">
              <Share1Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button size="icon" variant="ghost">
              <TrashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            </Button>
            <Button size="sm" variant="solid">
              Save
            </Button>
          </div>
        </div>
        <div className="grid gap-4">
          <Input
            className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-base font-medium text-gray-900 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-600"
            placeholder="Note title"
            type="text"
          />
          <Textarea
            className="h-[400px] w-full resize-none rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-base text-gray-900 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-600"
            placeholder="Start typing your note..."
          />
        </div>
      </div>
    </Container>
  );
}
