import { ColumnEntity } from "@/entities/column-entity"
import { ColumnRepository } from "../interfaces/column-repository"
import { prisma } from "@/lib/prisma"

export class PrismaColumnRepository implements ColumnRepository {
    async findById(id: string) {
        const column = await prisma.column.findUnique({ where: { id } })

        if (!column) {
            return null
        }

        return ColumnEntity.create({ ...column })
    }

    async create({ id, props }: ColumnEntity) {
        const column = await prisma.column.create({ data: { id, ...props } })

        return ColumnEntity.create({ ...column })
    }
}
