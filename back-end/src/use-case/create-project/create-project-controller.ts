import { Request, Response } from "express"
import { CreateProjectUseCase } from "./create-project-use-case"
import { PrismaProjectRepository } from "@/repositories/prisma/prisma-project-repository"

export class CreateProjectController {
    public async handler(request: Request, response: Response) {
        const data = request.body
        try {
            const prismaProjectRepository = new PrismaProjectRepository()
            const createProjectUseCase = new CreateProjectUseCase(prismaProjectRepository)
            console.log(data)
            await createProjectUseCase.execute(data)
        } catch (error) {
            console.log(error)
        }
        response.status(201).send()
    }
}
