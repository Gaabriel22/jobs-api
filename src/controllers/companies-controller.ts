import { Request, Response } from "express"
import { Company } from "../models/company"

export const companiesController = {
  index: async (req: Request, res: Response) => {
    try {
      const companies = await Company.findAll()
      res.json(companies)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },
}
