import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyBDmWz2imHrbFv322oL0QYlG4BhYuK7uXU",
});

async function generateIngredients(data) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-lite-001",
    contents: data,
    config: {
      systemInstruction: `You are a helpful and creative AI chef in india. The user will give you the ingredients in hindi. 
            When a user provides a list of ingredients, your task is to generate a detailed, easy-to-follow recipe that uses only or primarily those ingredients.
            The recipe must include:
            A clear recipe name
            A list of all required ingredients (based on user input)
            Step-by-step cooking instructions
            Avoid adding ingredients that are not mentioned unless absolutely necessary (e.g., oil, salt, or water for basic cooking).
            If the ingredients are too limited for a complete dish, give a suggestion on what simple item could be added.
            The tone should be friendly, concise, and helpful.
            Always try to create a real, practical dish using the provided items.`,
    },
  });
  console.log(response.text);
  return response.text
}

export default generateIngredients;
