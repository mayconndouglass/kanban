import { ColumnEntity } from "@/entities/column-entity"
import { ColumnRepository } from "../interfaces/column-repository"
import { prisma } from "@/lib/prisma"

export class PrismaColumnRepository implements ColumnRepository {
    async create({ id, props }: ColumnEntity) {
        const column = await prisma.column.create({ data: { id, ...props } })

        return ColumnEntity.create({ ...column })
    }
}
