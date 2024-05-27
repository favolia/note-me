"use client";
import React, { useState } from 'react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Share1Icon, TrashIcon } from '@radix-ui/react-icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { zodResolver } from "@hookform/resolvers/zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { z } from 'zod';
import { toast } from 'sonner';
import { useRouter } from "next/navigation"

const NoteForm = () => {
    const [loading, setLoading] = useState(false);
    const router = useRouter()

    const formSchema = z.object({
        title: z.string()
            .min(1, { message: "Title Note minimal 1 karakter." })
            .max(30, { message: "Title Note tidak boleh lebih dari 30 karakter." })
            .refine(value => value.trim().length > 0, { message: "Title Note tidak boleh kosong." }),
        text: z.string()
            .min(1, { message: "Text Note minimal 1 karakter." })
            .max(750, { message: "Text Note tidak boleh lebih dari 750 karakter." })
            .refine(value => value.trim().length > 0, { message: "Text Note tidak boleh kosong." }),
    })

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            thumbnail: "https://generated.vusercontent.net/placeholder.svg",
            title: "",
            text: ""
        },
    })

    async function onSubmit(newData) {
        // return alert(JSON.stringify(newData))
        const promise = () => new Promise(async (resolve, reject) => {
            setLoading(true)
            try {
                const { data } = await axios.post('/api/note/action', {
                    thumbnail: newData?.thumbnail,
                    title: newData?.title,
                    text: newData?.text,
                })

                if (data.status) {
                    resolve('Berhasil, refresh halaman.')
                    localStorage.removeItem('cachedNotes')
                    router.refresh()
                    form.reset()
                } else {
                    reject(data.message)
                }
                setLoading(false)
            } catch (error) {
                reject(error.message)
                console.log({ error });
                setLoading(false)
            }
        })

        toast.promise(promise, {
            loading: 'Menulis catatan...',
            success: (data) => {
                return data;
            },
            error: (err) => {
                return err;
            }
        })

    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full rounded-lg bg-white p-4 sm:p-8 shadow-sm dark:bg-gray-950 dark:shadow-none">
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Note Details</h2>
                    <div className="flex gap-2">
                        <Button size="icon" variant="ghost">
                            <Share1Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </Button>
                        <Button size="icon" variant="ghost">
                            <TrashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                        </Button>
                        <Button disabled={loading} type={"submit"} size="sm" variant="solid">
                            Save
                        </Button>
                    </div>
                </div>
                <div className="grid gap-4">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel>Username</FormLabel> */}
                                <FormControl>
                                    {/* <Input placeholder="Username"  /> */}
                                    <Input
                                        {...field}
                                        disabled={loading}
                                        className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-base font-medium text-gray-900 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-600"
                                        placeholder="Note title"
                                        type="text"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="text"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        {...field}
                                        disabled={loading}
                                        className="h-[400px] w-full resize-none rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-base text-gray-900 focus:border-gray-500 focus:bg-white focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:focus:border-gray-600"
                                        placeholder="Start typing your note..."
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )} />

                </div>
            </form>
        </Form>
    )
}

export default NoteForm