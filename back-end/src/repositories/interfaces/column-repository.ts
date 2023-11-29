import { ColumnEntity } from "@/entities/column-entity"

export interface ColumnRepository {
    create(data: ColumnEntity): Promise<ColumnEntity>
}
