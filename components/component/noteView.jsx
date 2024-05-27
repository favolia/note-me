import { Share1Icon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import Image from "next/image"

const NoteView = ({ seeNote }) => {

    const works = [
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80",
        },
        {
            artist: seeNote.author,
            art: "https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80",
        },
    ]

    return (
        <div className="w-full h-full flex flex-col overflow-hidden rounded-lg bg-white p-4 sm:p-8 shadow-sm dark:bg-gray-950 dark:shadow-none">
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-50">Note Details</h2>
                <div className="flex gap-2">
                    <Button size="icon" variant="ghost">
                        <Share1Icon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </Button>
                    <Button size="icon" variant="ghost">
                        <TrashIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </Button>
                </div>
            </div>
            <ScrollArea className="h-full flex flex-col rounded-t-lg">
                <div className="mb-5 flex justify-center items-center md:justify-start">
                    <ScrollArea className="w-96 sm:w-[80%] whitespace-nowrap rounded-md border">
                        <div className="flex w-max space-x-4 p-4">
                            {works.map((artwork) => (
                                <figure key={artwork.artist} className="shrink-0">
                                    <div className="overflow-hidden rounded-md">
                                        <Image
                                            src={artwork.art}
                                            alt={`Photo by ${artwork.artist}`}
                                            className="aspect-[3/4] h-fit w-fit object-cover"
                                            width={300}
                                            height={400}
                                        />
                                    </div>
                                    <figcaption className="pt-2 text-xs text-muted-foreground">
                                        Photo by{" "}
                                        <span className="font-semibold text-foreground">
                                            {artwork.artist}
                                        </span>
                                    </figcaption>
                                </figure>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>

                <h1 className="text-xl font-medium mb-2">
                    {seeNote.title}
                </h1>
                <p className="text-muted-foreground font-sans text-xs md:text-sm">
                    {seeNote.text}
                </p>
            </ScrollArea>
        </div>
    )
}

export default NoteView
