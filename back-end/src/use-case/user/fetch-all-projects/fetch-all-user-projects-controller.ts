import { Request, Response } from "express"
import { z } from "zod"
import { PrismaProjectRepository } from "@/repositories/prisma/prisma-project-repository"
import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { FetchAllUserProjectsUseCase } from "./fetch-all-user-projects-use-case"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"

export class FetchAllUserProjectsController {
    async handle(request: Request, response: Response) {
        const fetchAllUserProjectsQuerySchema = z.object({
            id: z.string()
        })

        const data = fetchAllUserProjectsQuerySchema.parse(request.params)

        try {
            const userRepositry = new PrismaUserRepository()
            const projectRepository = new PrismaProjectRepository()
            const fetchAllUserProjectUseCase = new FetchAllUserProjectsUseCase(
                userRepositry,
                projectRepository
            )

            const projects = await fetchAllUserProjectUseCase
                .execute({ userId: data.id })

            response.status(200).send(projects)
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return response.status(404).send({ message: error.message })
            }

            response.status(500).send({ message: "Internal Server Error" })
        }
    }
}
