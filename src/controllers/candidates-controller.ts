import { Request, Response } from "express"
import { Candidate } from "../models/candidate"

export const candidatesController = {
  index: async (req: Request, res: Response): Promise<void> => {
    try {
      const candidates = await Candidate.findAll()
      res.json(candidates)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      } else {
        res.sendStatus(500)
      }
    }
  },

  save: async (req: Request, res: Response): Promise<void> => {
    const { name, bio, email, phone, openToWork } = req.body

    try {
      const candidate = await Candidate.create({
        name,
        bio,
        email,
        phone,
        openToWork,
      })

      res.status(201).json(candidate)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      } else {
        res.sendStatus(500)
      }
    }
  },

  show: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
      const candidate = await Candidate.findByPk(id)

      if (!candidate) {
        res.status(404).json({ message: "Candidate not found" })
        return
      }

      res.status(200).json(candidate)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      } else {
        res.sendStatus(500)
      }
    }
  },

  update: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params
    const { name, bio, email, phone, openToWork } = req.body

    try {
      const candidate = await Candidate.findByPk(id)

      if (!candidate) {
        res.status(404).json({ message: "Candidate not found" })
        return
      }

      candidate.name = name
      candidate.bio = bio
      candidate.email = email
      candidate.phone = phone
      candidate.openToWork = openToWork

      await candidate.save()
      res.status(200).json(candidate)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      } else {
        res.sendStatus(500)
      }
    }
  },

  delete: async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params

    try {
      await Candidate.destroy({ where: { id } })
      res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      } else {
        res.sendStatus(500)
      }
    }
  },
}
