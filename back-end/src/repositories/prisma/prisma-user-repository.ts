import { UserEntity } from "@/entities/user-entity"
import { prisma } from "@/lib/prisma"
import { UserRepository } from "../interfaces/user-repository"

export class PrismaUserRepository implements UserRepository {
    async create(data: UserEntity) {
        const user = await prisma.user.create({ data: data.props })

        return user
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({ where: { email } })

        return user
    }
    async findById(id: string) {
        const user = await prisma.user.findUnique({ where: { id } })

        return user
    }
}
