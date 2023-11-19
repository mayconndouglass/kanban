import { ColumnEntity } from "@/entities/column-entity"
import { ColumnRepository } from "../interfaces/column-repository"
import { prisma } from "@/lib/prisma"

export class PrismaColumnRepository implements ColumnRepository {
    async create(data: ColumnEntity) {
        const column = await prisma.column.create({ data: data.props })

        return column
    }
}
