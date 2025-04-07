import dotenv from "dotenv"
dotenv.config()

import express, { Request, Response } from "express"
import { Candidate } from "./models/candidate"

const app = express()
const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.json({ hello: "Hello World!" })
})

router.get("/candidates", async (req, res) => {
  const candidates = await Candidate.findAll()
  res.json(candidates)
})

app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
