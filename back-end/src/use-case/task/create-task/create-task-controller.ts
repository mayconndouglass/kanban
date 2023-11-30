import { PrismaTaskRepository } from "@/repositories/prisma/prisma-task-repository"
import { Request, Response } from "express"
import { z } from "zod"
import { CreateTaskUseCase } from "./create-task-use-case"
import { PrismaColumnRepository } from "@/repositories/prisma/prisma-column-repository"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"

export class CreateTaskControoler {
    async handle(request: Request, response: Response) {
        const createTaskBodySchema = z.object({
            columnId: z.string(),
            name: z.string(),
            description: z.string(),
            dueDate: z.string()
        })

        const data = createTaskBodySchema.parse(request.body)

        try {
            const taskRepository = new PrismaTaskRepository()
            const columnRepository = new PrismaColumnRepository()
            const createTaskUseCase = new CreateTaskUseCase(
                taskRepository,
                columnRepository
            )

            //TODO: Resolver como vai ser recebido o dueDate
            const { id, props } = await createTaskUseCase.execute({
                ...data,
                dueDate: new Date(data.dueDate)
            })

            response.status(201).send({ id, ...props })
        } catch (error) {
            if (error instanceof ResourceNotFound) {
                return response.status(404).send({ message: error.message })
            }

            response.status(500).send({ message: "Internal Server Error" })
        }
    }
}
