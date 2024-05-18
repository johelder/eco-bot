import { GoogleGenerativeAI } from '@google/generative-ai';

const generativeIA = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY!);

const model = generativeIA.getGenerativeModel({ model: 'gemini-pro' });

export async function generateContent(prompt: string) {
  const result = await model.generateContent(prompt);

  const response = await result.response;

  const text = response.text();

  return text;
}
