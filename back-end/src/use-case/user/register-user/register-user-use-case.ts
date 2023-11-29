import { UserRepository } from "@/repositories/interfaces/user-repository"
import { RegisterUserDTO } from "./register-user-dto"
import { hash } from "bcryptjs"
import { UserEntity } from "@/entities/user-entity"
import { EmailAlreadyExists } from "@/use-case/errors/email-already-exists-error"

export class RegisterUserUseCase {
    constructor(private userRepository: UserRepository) { }

    async execute(data: RegisterUserDTO) {
        const userWithSameEmail = await this.userRepository.
            findByEmail(data.email)

        if (userWithSameEmail) {
            throw new EmailAlreadyExists()
        }

        const { password, ...restData } = data
        const passwordHash = await hash(password, 10)

        const user = UserEntity.create({ ...restData, passwordHash })

        await this.userRepository.create(user)

        return user
    }
}
