import { Request, Response } from "express"
import { Company } from "../models"

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

  save: async (req: Request, res: Response) => {
    const { name, bio, website, email } = req.body
    try {
      const company = await Company.create({
        name,
        bio,
        website,
        email,
      })
      res.status(201).json(company)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      const company = await Company.findByPk(id, { include: "jobs" })
      if (!company) {
        res.status(404).json({ message: "Company not found" })
      }
      res.json(company)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, bio, website, email } = req.body
    try {
      const [affectedRows, companies] = await Company.update(
        {
          name,
          bio,
          website,
          email,
        },
        {
          where: { id },
          returning: true,
        }
      )

      res.json(companies[0])
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params
    try {
      await Company.destroy({ where: { id } })

      res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },
}
