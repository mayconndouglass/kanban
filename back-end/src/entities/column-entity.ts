import { v4 as uuidv4 } from "uuid"

interface ColumnEntityProps {
    id?: string
    name: string
    createdAt?: Date
    projectId: string
}

export class ColumnEntity {
    public id: string
    public name: string
    public createdAt: Date
    public projectId: string

    constructor(props: ColumnEntityProps) {
        this.id = props.id ?? uuidv4()
        this.name = props.name
        this.createdAt = props.createdAt ?? new Date()
        this.projectId = props.projectId
    }
}
