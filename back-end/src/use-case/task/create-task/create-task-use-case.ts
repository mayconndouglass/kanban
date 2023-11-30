import { TaskRepository } from "@/repositories/interfaces/task-repository"
import { CreateTaskDTO } from "./create-task-dto"
import { TaskEntity } from "@/entities/task-entity"
import { ColumnRepository } from "@/repositories/interfaces/column-repository"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"

export class CreateTaskUseCase {
    constructor(
        private taskRepository: TaskRepository,
        private columnRepository: ColumnRepository
    ) { }

    // Se apenas o admin puder criar as tasks, isso deverá ser verificado
    async execute(data: CreateTaskDTO) {
        const columnExists = await this.columnRepository.findById(data.columnId)

        if (!columnExists) {
            throw new ResourceNotFound()
        }

        const task = TaskEntity.create({ ...data })

        await this.taskRepository.create(task)

        return task
    }
}
