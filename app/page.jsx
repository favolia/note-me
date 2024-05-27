"use client";
import Container from "@/components/component/container";
import { Button } from "@/components/ui/button";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import NoteForm from "@/components/component/noteForm";
import NotesList from "@/components/component/notesList";
import NoteView from "@/components/component/noteView";

export default function Home() {
  const [isOpenNoteList, setIsOpenNoteList] = useState(false);
  const [seeNote, setSeeNote] = useState(null);

  useEffect(() => {
    console.log(seeNote);
  }, [seeNote]);

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
              <DropdownMenuItem>Public Note</DropdownMenuItem>
              <DropdownMenuItem>Your Note</DropdownMenuItem>
              <DropdownMenuItem>
                <button onClick={() => setSeeNote(null)}>
                  Create Note
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <NotesList setSeeNote={setSeeNote} />
      </div>

      {seeNote !== null
        ? (
          <NoteView seeNote={seeNote} />
        )
        : (
          <NoteForm />
        )}

    </Container>
  );
}
