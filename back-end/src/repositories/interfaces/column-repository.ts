import { ColumnEntity } from "@/entities/column-entity"

export interface ColumnRepository {
    create(data: ColumnEntity): Promise<ColumnEntity>
    findById(id: string): Promise<ColumnEntity | null>
}
