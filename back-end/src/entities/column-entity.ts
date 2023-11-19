import { BaseEntity, BaseEntityProps } from "./base-entity"

interface ColumnEntityProps extends BaseEntityProps {
    name: string
    createdAt: Date
    projectId: string
}

export class ColumnEntity extends BaseEntity<ColumnEntityProps> {
    static create(
        props: Omit<ColumnEntityProps, "createdAt"> & { createdAt?: Date }
    ) {
        const column = new ColumnEntity({
            ...props,
            createdAt: props.createdAt ?? new Date()
        })

        return column
    }
}
