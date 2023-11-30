import { TaskEntity } from "@/entities/task-entity"

export interface TaskRepository {
    create(data: TaskEntity): Promise<TaskEntity>
}
