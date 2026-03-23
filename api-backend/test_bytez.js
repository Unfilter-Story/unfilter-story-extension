import Bytez from 'bytez.js'
import 'dotenv/config'

async function testBytez() {
  try {
    const bytez = new Bytez(process.env.BYTEZ_API_KEY)
    console.log("Using Key:", process.env.BYTEZ_API_KEY.substring(0, 5) + "...")
    const model = bytez.model("openai/gpt-4o-mini")
    const { error, output } = await model.run([{ role: "user", content: "Say hello" }])
    
    if (error) {
      console.error("Bytez Error:", error)
    } else {
      console.log("Bytez Output:", output)
      console.log("Output Type:", typeof output)
    }
  } catch (err) {
    console.error("Execution Error:", err)
  }
}

testBytez()
