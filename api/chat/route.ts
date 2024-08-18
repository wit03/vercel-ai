import { createOpenAI as createGroq } from "@ai-sdk/openai";
import { streamText, convertToCoreMessages, generateText } from "ai";

const groq = createGroq({
    baseURL: "https://api.groq.com/openai/v1",
    apiKey: process.env.GROQ_API_KEY,
});

const { text } = await generateText({
    model: groq("llama-3.1-8b-instant"),
    prompt: "What is the meaning of life?",
})

// // max response duration in seconds
// export const maxDuration = 30;

// export const POST = async (req: Request, res: Response) => {
//     const { message } = await req.json();

// }
