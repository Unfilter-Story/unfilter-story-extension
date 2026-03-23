import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

async function testGemini() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    console.log("Using Key:", process.env.GEMINI_API_KEY.substring(0, 5) + "...")
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro" })
    const prompt = "Say hello"
    const response = await model.generateContent(prompt)
    console.log("Gemini Output:", response.response.text())
  } catch (err) {
    console.error("Gemini Error:", err.message)
    if (err.stack) console.error(err.stack)
  }
}

testGemini()
