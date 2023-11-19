import { BaseEntity, BaseEntityProps } from "./base-entity"

interface ColumnEntityProps extends BaseEntityProps {
    name: string
    createdAt: Date
    projectId: string
}

export class ColumnEntity extends BaseEntity<ColumnEntityProps> { }
