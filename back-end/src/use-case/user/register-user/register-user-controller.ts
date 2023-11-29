import { PrismaUserRepository } from "@/repositories/prisma/prisma-user-repository"
import { Request, Response } from "express"
import { z } from "zod"
import { RegisterUserUseCase } from "./register-user-use-case"
import { EmailAlreadyExists } from "@/use-case/errors/email-already-exists-error"

export class RegisterUserController {
    async handle(request: Request, response: Response) {
        const registerUserBodySchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string()
        })

        const data = registerUserBodySchema.parse(request.body)

        try {
            const userRepositry = new PrismaUserRepository()
            const registerUserUseCase = new RegisterUserUseCase(userRepositry)

            const { id, props } = await registerUserUseCase.execute(data)

            response.status(201).send({ id, ...props, passwordHash: undefined })
        } catch (error) {
            if (error instanceof EmailAlreadyExists) {
                response.status(409).send({ message: error.message })
            }

            response.status(500).send({ message: "Internal Server Error" })
        }
    }
}
