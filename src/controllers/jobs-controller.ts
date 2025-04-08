import { Request, Response } from "express"
import { Job } from "../models"

export const jobsController = {
  index: async (req: Request, res: Response) => {
    try {
      const jobs = await Job.findAll({ include: "company" })
      res.json(jobs)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },
}
