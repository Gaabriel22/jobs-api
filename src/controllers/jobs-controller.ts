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

  save: async (req: Request, res: Response) => {
    const { title, description, limitDate, companyId } = req.body

    try {
      const job = await Job.create({
        title,
        description,
        limitDate,
        companyId,
      })

      res.status(201).json(job)
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const job = await Job.findByPk(id, { include: ["company", "candidates"] })
      const candidatesCount = await job?.countCandidates()
      res.json({ ...job?.get(), candidatesCount })
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params
    const { title, description, limitDate, companyId } = req.body

    try {
      const [affectedRows, jobs] = await Job.update(
        {
          title,
          description,
          limitDate,
          companyId,
        },
        {
          where: { id },
          returning: true,
        }
      )

      res.json(jobs[0])
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const job = await Job.destroy({ where: { id } })
      res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  addCandidate: async (req: Request, res: Response) => {
    const jobId = req.params.id
    const { candidateId } = req.body

    try {
      const job = await Job.findByPk(jobId)

      if (job === null)
        res.status(404).json({ message: "Vaga de emprego não encontrada" })

      await job?.addCandidate(candidateId)

      res.status(201).send
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },

  removeCandidate: async (req: Request, res: Response) => {
    const jobId = req.params.id
    const { candidateId } = req.body

    try {
      const job = await Job.findByPk(jobId)

      if (job === null)
        res.status(404).json({ message: "Vaga de emprego não encontrada" })

      await job?.removeCandidate(candidateId)

      res.status(204).send()
    } catch (err) {
      if (err instanceof Error) {
        res.status(400).json({ message: err.message })
      }
    }
  },
}
