"use server"

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: process.env.GOOGLE_API_KEY
})

export async function generateTextAction(prompt: string): Promise<string> {
    if (!prompt || !prompt.trim()) {
        return "Please enter a prompt";
    }
    if (!process.env.GOOGLE_API_KEY) {
        return "Error: GOOGLE_API_KEY is not configured";
    }
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });
        return response.text || "no output generated";
    } catch (error: any) {
        if (error?.status === 429 || error?.message?.includes("429")) {
            return "Error: API quota exceeded. Please wait a few minutes and try again.";
        }
        return `Error: ${error?.message || "Failed to generate response"}`;
    }
}
