
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const SYSTEM_INSTRUCTION = `
You are an expert business consultant for SkyNet Solutions. 
SkyNet Solutions builds custom websites, advanced support systems, and internal ticketing platforms for businesses.
Your goal is to help potential clients identify their digital needs.
Always be professional, tech-forward, and helpful. 
Keep responses concise and encourage them to view our services or contact us for a quote.
If asked about pricing, mention it is customized based on scope but highly competitive for enterprise solutions.
`;

export const getAIResponse = async (prompt: string, history: { role: 'user' | 'model', text: string }[]): Promise<string> => {
  try {
    const chat = ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: [
        ...history.map(h => ({ role: h.role, parts: [{ text: h.text }] })),
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const result = await chat;
    return result.text || "I'm sorry, I'm having trouble processing that right now. How can SkyNet help you today?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The SkyNet neural network is currently calibrating. Please try again in a moment.";
  }
};
