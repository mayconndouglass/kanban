import { UserEntity } from "@/entities/user-entity"
import { UserRepository } from "../interfaces/user-repository"
import { prisma } from "@/lib/prisma"

export class PrismaUserRepository implements UserRepository {
    async create(data: UserEntity) {
        const user = await prisma.user.create({ data: data.props })

        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({ where: { email } })

        return user
    }
}
