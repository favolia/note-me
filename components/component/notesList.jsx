"use client";
import React, { useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from 'next/link';
import { fetchAllNotes } from '@/lib/actionNote';
import TimeAgo from './timeAgo';

const NotesList = ({ setSeeNote }) => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetchNotes()
    }, []);

    const fetchNotes = async () => {
        const allNotes = await fetchAllNotes()
        setNotes(allNotes.notes)
    }
    return (
        <div className="h-full overflow-hidden">
            <ScrollArea className="h-full grid gap-4">
                {notes.length > 0 ? notes.map((v, i) => (
                    <div
                        key={i}
                        className="cursor-pointer flex items-start gap-4 rounded-md p-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => setSeeNote({
                            author: v.author,
                            title: v.title,
                            text: v.text,
                            thumbnail: v.thumbnail,
                            createdAt: v.createdAt
                        })}
                    >
                        <div className="flex-shrink-0">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-base font-medium text-gray-900 dark:text-gray-50">
                                {v.title}
                            </h3>
                            <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-400">
                                {v.text}
                            </p>
                            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                                <TimeAgo pastDate={v.createdAt} />
                            </p>
                        </div>
                    </div>
                )) : (
                    <p className='text-sm sm:text-base'>Belum ada catatan.</p>
                )}
            </ScrollArea>
        </div>
    )
}

export default NotesList