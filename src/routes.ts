import express, { Request, Response } from "express"
import { candidatesController } from "./controllers/candidates-controller"

const router = express.Router()

router.get("/", (req: Request, res: Response) => {
  res.json({ hello: "Hello World!" })
})

router.get("/candidates", candidatesController.index)
router.get("/candidates/:id", candidatesController.show)
router.post("/candidates", candidatesController.save)
router.put("/candidates/:id", candidatesController.update)
router.delete("/candidates/:id", candidatesController.delete)

export { router }
