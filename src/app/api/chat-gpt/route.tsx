import { NextResponse } from "next/server";
import OpenAI from "openai";

export async function POST(request) {

    const openai = new OpenAI({
        apiKey: process.env.API_KEY
    })

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "Check the user content to see if they gave a haiku, offer critique for the haiku if so. Otherwise create a haiku."
            },
            {
                role: "user",
                content: "not a haiku"
            }
        ],
        temperature: 0,
        max_tokens: 1024,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return NextResponse.json(response);
}