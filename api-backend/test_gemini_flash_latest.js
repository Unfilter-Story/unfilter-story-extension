import { GoogleGenerativeAI } from '@google/generative-ai'
import 'dotenv/config'

async function testGeminiFlashLatest() {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
    console.log("Using Key:", process.env.GEMINI_API_KEY.substring(0, 5) + "...")
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" })
    const prompt = "Say hello"
    const response = await model.generateContent(prompt)
    console.log("Gemini Flash Latest Output:", response.response.text())
  } catch (err) {
    console.error("Gemini Flash Latest Error:", err.message)
  }
}

testGeminiFlashLatest()
