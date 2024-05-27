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
            <ScrollArea className="w-full h-full flex flex-col rounded-t-lg">
                {/* <div className="mb-5 flex justify-center items-center md:justify-start">
                    <ScrollArea className="w-48 ">
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
                </div> */}

                <h1 className="text-xl font-medium mb-2">
                    {seeNote.title}
                </h1>
                <p className="hyphens-auto leading-relaxed text-justify text-muted-foreground font-sans text-xs sm:text-sm">
                    {seeNote.text}
                    {/* Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat eveniet temporibus tempora eligendi aperiam omnis eaque voluptatem. Fugiat ab minima facilis illum vel quaerat, vitae molestias totam perspiciatis, sunt consequuntur inventore, eius ex? Tempora ex sed rerum error omnis alias eligendi repellendus sit iusto distinctio tempore architecto esse perferendis provident, nisi quo facilis laudantium, vitae qui repudiandae odit reiciendis, necessitatibus voluptas delectus? Quasi neque ut architecto quidem impedit eaque totam, pariatur nulla tenetur ducimus rem sunt. Sunt dolore asperiores corrupti obcaecati tempora soluta aliquid explicabo nisi accusantium veritatis! Distinctio enim ipsa modi, et nemo ipsum iusto! Deserunt odio iste nesciunt tenetur ea. Modi, eaque, voluptas itaque dolorum minus provident molestiae, molestias ducimus expedita doloremque officia dolore assumenda. Numquam illo fugit dolor nihil, obcaecati doloribus magni minus deserunt reprehenderit. Repellendus praesentium quis rem quas adipisci recusandae, voluptate laborum voluptas quo? Eius ipsam quis eum soluta magnam non, voluptatum facilis, earum asperiores quo quasi exercitationem amet odio expedita eaque cum ullam officia, ratione aperiam veniam delectus dolor laboriosam. Neque eaque aspernatur harum fuga corporis in at adipisci aut eligendi assumenda! Explicabo, fugiat minima quae eius nam impedit? Fugit aut perferendis quos, fugiat incidunt deserunt. Ab ex minima impedit eveniet at ullam dolorem reprehenderit, perferendis id excepturi tempora! Unde inventore praesentium ducimus nam iusto fugit, sunt quis libero voluptates in, nulla officiis iste rem dolore. A ab vel quos illo laborum voluptatum magnam asperiores harum ullam deserunt dolorum consequuntur enim expedita eos nisi omnis odit, nulla vero deleniti doloribus sequi. Necessitatibus laborum dolorem illo sed beatae qui. Cum quibusdam sapiente error quia. Molestiae neque architecto aspernatur ducimus odit animi modi excepturi temporibus atque illo error asperiores voluptatibus non hic harum, quod adipisci, perferendis repellendus? Eum, sed nobis. Cupiditate illum nam reprehenderit maxime! Quae vero, ad animi maiores aperiam ratione inventore iusto sint quod non, magnam consequatur distinctio optio tempore obcaecati amet dolores laudantium sed quasi pariatur architecto? Incidunt unde sequi quaerat iure cupiditate earum, et quae reiciendis corporis accusamus autem ullam doloribus repellendus magni dolore vel ipsam maxime sint reprehenderit, aliquid iusto! Harum molestiae velit repudiandae, quod assumenda quibusdam voluptate nobis adipisci libero deleniti qui eligendi atque! Beatae similique facilis aspernatur corrupti id! Deleniti nulla voluptates ipsam officia, hic libero dolores nostrum aliquam placeat sit, quaerat quod rerum praesentium. Est excepturi sed culpa quasi. Rerum, doloribus adipisci? Voluptatum, recusandae nam laborum voluptatibus quae ratione provident unde excepturi officiis id obcaecati, atque libero vel hic aspernatur. Sit, praesentium! Minus omnis perspiciatis, iusto rerum eius fugit sed quaerat, doloribus a ea quis necessitatibus, distinctio iure delectus culpa quod est enim debitis quisquam? Saepe, nostrum. Rerum, saepe consequatur. Tempore vel, ab necessitatibus dolores a neque pariatur modi mollitia, animi in nam consequatur illum quis fugiat odit sapiente odio possimus, quidem similique numquam distinctio? Ea natus consectetur nesciunt error beatae nihil, voluptates ipsum omnis culpa quas vero asperiores placeat veniam voluptatum architecto consequuntur minus. Eaque reprehenderit vel id quaerat voluptatem officia suscipit et quo natus ipsum nobis eius ea eos mollitia dolorem, consectetur blanditiis nisi quibusdam, facere debitis! Autem saepe sed id consequuntur possimus dolorem similique neque, tempora esse dicta rem obcaecati veritatis consectetur perspiciatis quos asperiores aliquid assumenda laudantium itaque sint maiores! Accusamus sed praesentium quas, impedit, aut perferendis dolorem tenetur ex suscipit explicabo commodi obcaecati ipsum in, fugiat quae laudantium est vitae ad nulla? Natus inventore pariatur doloremque id explicabo ea doloribus officiis qui facilis ad, soluta nesciunt minus voluptatibus ullam, quisquam distinctio quod sit? Minima cumque necessitatibus consectetur deleniti fugit, optio perspiciatis ut maiores dignissimos debitis laboriosam nam pariatur corporis ipsam quia sapiente consequuntur error quaerat molestiae illo. Non enim necessitatibus soluta inventore impedit. Animi, ab consequatur voluptatibus quasi tempore itaque, suscipit nemo aperiam rem dolores, fugit quis voluptatum sunt possimus maiores velit quia rerum eligendi ex quaerat pariatur repellat id natus! Sequi minima reiciendis id modi vitae iure aliquid voluptate, soluta asperiores ab perspiciatis culpa ad placeat est illo possimus eum velit omnis aut libero numquam illum saepe! Culpa aut exercitationem quod praesentium officia veniam voluptas eum facilis modi magnam nostrum nulla voluptatibus, velit ipsa error doloribus voluptatum voluptate aliquam? Iure corrupti obcaecati doloribus illum dicta tenetur animi soluta, error expedita mollitia rerum corporis, totam nemo ipsum blanditiis neque, vel pariatur cupiditate quas. */}
                </p>
            </ScrollArea>
        </div>
    )
}

export default NoteView
