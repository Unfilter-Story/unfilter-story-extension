import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

async function testGeminiFlash() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    console.log("Using Key:", process.env.GEMINI_API_KEY.substring(0, 5) + "...")
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" })
    const prompt = "Say hello"
    const response = await model.generateContent(prompt)
    console.log("Gemini 1.5 Flash Output:", response.response.text())
  } catch (err) {
    console.error("Gemini 1.5 Flash Error:", err.message)
  }
}

testGeminiFlash()
