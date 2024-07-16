import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import { NextResponse } from "next/server";
config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY || "");
export const POST = async (req: Request) => {
    const code = await req.json()

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Write an explanation of the following code ${code} (Remember that explanations should be in a storytelling manner and it should be very short and precise and point-wise as I will be giving audio to it) If there is an error in the code, explain it, solve it and return it back:\n\n`

    const result = await model.generateContent(prompt);

    const response = result.response;

    console.log(response);

    const text = response.text();
    console.log(text);

    return NextResponse.json({
        success: true,
        message: "Response Generated",
        text
    })
}
