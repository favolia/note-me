import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export const GET = async (req) => {
    const params = param => req.nextUrl.searchParams.get(param)

    try {
        const notes = await prisma.note.findMany()
        return NextResponse.json({
            status: true,
            message: "success",
            notes
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            message: error.message,
            notes: null
        })
    }
}

export const POST = async (req) => {
    const {
        id,
        authorId,
        published,
        isPrivate,
        thumbnail,
        title,
        text,
        author,
    } = await req.json()

    try {
        const note = await prisma.note.create({
            data: {
                title,
                text,
                isPrivate: true,
                thumbnail: thumbnail || null,
            }
        })
        return NextResponse.json({
            status: true,
            message: "success",
            note
        })
    } catch (error) {
        return NextResponse.json({
            status: false,
            message: error.message,
            note: null
        })
    }
}