import { PrismaColumnRepository } from "@/repositories/prisma/prisma-column-repository"
import { PrismaProjectRepository } from "@/repositories/prisma/prisma-project-repository"
import { Request, Response } from "express"
import { z } from "zod"
import { CreateColumnUseCase } from "./create-column-use-case"

export class CreateColumnController {
    async handle(request: Request, response: Response) {
        const createColumnBodySchema = z.object({
            name: z.string(),
            projectId: z.string()
        })

        const data = await createColumnBodySchema.parse(request.body)

        try {
            const projectRepository = new PrismaProjectRepository()
            const columnRepository = new PrismaColumnRepository()
            const createColumnUseCase = new CreateColumnUseCase(
                columnRepository,
                projectRepository
            )

            const { column } = await createColumnUseCase.execute(data)

            response.status(201).send({ column })
        } catch (error) {
            response.status(404).send({ message: "Resource Not Found Error." })
        }
    }
}
