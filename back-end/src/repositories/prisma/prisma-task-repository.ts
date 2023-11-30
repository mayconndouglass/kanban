import { TaskRepository } from "../interfaces/task-repository"
import { TaskEntity } from "@/entities/task-entity"
import { prisma } from "@/lib/prisma"

export class PrismaTaskRepository implements TaskRepository {
    async create({ id, props }: TaskEntity) {
        const task = await prisma.task.create({ data: { id, ...props } })

        return TaskEntity.create({ ...task })
    }
}
