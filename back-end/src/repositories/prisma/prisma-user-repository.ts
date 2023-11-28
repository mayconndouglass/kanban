import { UserEntity } from "@/entities/user-entity"
import { prisma } from "@/lib/prisma"
import { UserRepository } from "../interfaces/user-repository"

export class PrismaUserRepository implements UserRepository {
    async create({ id, props }: UserEntity) {
        const user = await prisma.user.create({ data: { id, ...props } })

        return UserEntity.create({ ...user })
    }

    async findByEmail(email: string) {
        const user = await prisma.user.findUnique({ where: { email } })

        if (!user) {
            return null
        }

        return UserEntity.create({ ...user })
    }
    async findById(id: string) {
        const user = await prisma.user.findUnique({ where: { id } })
        console.log("repositorie era p ser null", user)
        if (!user) {
            console.log("não entrou aqui ?")
            return null
        }

        return UserEntity.create({ ...user })
    }
}
