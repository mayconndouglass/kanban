import { BaseEntity } from "./base-entity"

interface TaskEntityPrps {
    columnId: string
    name: string
    description: string
    createdAt: Date
    dueDate: Date
}

export class TaskEntity extends BaseEntity<TaskEntityPrps> {
    static create(
        props: Omit<TaskEntityPrps, "createdAt">
            & { id?: string, createdAt?: Date }
    ) {
        const { id, ...restData } = props
        const task = new TaskEntity({
            ...restData,
            createdAt: props.createdAt ?? new Date()
        }, id)

        return task
    }
}
