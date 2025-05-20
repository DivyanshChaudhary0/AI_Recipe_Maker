
import { GoogleGenAI } from "@google/genai"

const ai = new GoogleGenAI({ apiKey: "AIzaSyBDmWz2imHrbFv322oL0QYlG4BhYuK7uXU" });

async function generateIngredients(){
    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite-001",
    contents: "Explain how AI works in a few words",
    });
    console.log(response.text);
}

generateIngredients();
