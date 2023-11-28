import { BaseEntity } from "./base-entity"

interface ColumnEntityProps {
    name: string
    createdAt: Date
    projectId: string
}

export class ColumnEntity extends BaseEntity<ColumnEntityProps> {
    static create(
        props: Omit<ColumnEntityProps, "createdAt"> &
        { id?: string, createdAt?: Date }
    ) {
        const { id, ...restData } = props

        const column = new ColumnEntity({
            ...restData,
            createdAt: props.createdAt ?? new Date(),
        }, id)

        return column
    }
}
