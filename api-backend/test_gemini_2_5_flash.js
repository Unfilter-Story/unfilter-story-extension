import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

async function testGeminiFlash() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    console.log("Using Key:", process.env.GEMINI_API_KEY.substring(0, 5) + "...")
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })
    const prompt = "Say hello"
    const response = await model.generateContent(prompt)
    console.log("Gemini Flash Output:", response.response.text())
  } catch (err) {
    console.error("Gemini Flash Error:", err.message)
  }
}

testGeminiFlash()
