import { PrismaColumnRepository } from "@/repositories/prisma/prisma-column-repository"
import { PrismaProjectRepository } from "@/repositories/prisma/prisma-project-repository"
import { Request, Response } from "express"
import { z } from "zod"
import { CreateColumnUseCase } from "./create-column-use-case"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"
import { NotAllowed } from "@/use-case/errors/not-allowed-error"

export class CreateColumnController {
    async handle(request: Request, response: Response) {
        const createColumnBodySchema = z.object({
            name: z.string(),
            projectId: z.string(),
            adminId: z.string()
        })

        const data = createColumnBodySchema.parse(request.body)

        try {
            const projectRepository = new PrismaProjectRepository()
            const columnRepository = new PrismaColumnRepository()
            const createColumnUseCase = new CreateColumnUseCase(
                columnRepository,
                projectRepository
            )

            const { id, props } = await createColumnUseCase.execute(data)

            response.status(201).send({ id, ...props })
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return response.status(404).send({ message: error.message })
            }

            if (error instanceof NotAllowed) {
                return response.status(403).send({ message: error.message })
            }

            response.status(500).send({ message: "Internal Server Error" })
        }
    }
}
