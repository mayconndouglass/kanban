import { PrismaProjectRepository } from "@/repositories/prisma/prisma-project-repository"
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { Request, Response } from "express"
import { z } from "zod"
import { CreateProjectUseCase } from "./create-project-use-case"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"

export class CreateProjectController {
    public async handle(request: Request, response: Response) {
        const createProjectBodySchema = z.object({
            name: z.string(),
            description: z.string().optional(),
            admin: z.string().uuid(),
        })

        const data = createProjectBodySchema.parse(request.body)

        try {
            const prismaProjectRepository = new PrismaProjectRepository()
            const prismaUserRepository = new PrismaUserRepository()
            const createProjectUseCase = new CreateProjectUseCase(
                prismaProjectRepository,
                prismaUserRepository
            )

            const { id, props } = await createProjectUseCase.execute(data)

            response.status(201).send({ id, ...props })
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return response.status(404).send({ message: error.message })
            }

            response.status(500).send({ message: "Internal Server Error" })
        }
    }
}
