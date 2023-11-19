import { ColumnEntity } from "@/entities/column-entity"
import { Column } from "@prisma/client"

export interface ColumnRepository {
    create(data: ColumnEntity): Promise<Column>
}
