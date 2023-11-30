export interface CreateTaskDTO {
    readonly columnId: string
    readonly name: string
    readonly description: string
    readonly dueDate: Date
}
