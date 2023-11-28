import { ProjectEntity } from "@/entities/project-entity"
import { prisma } from "@/lib/prisma"
import { ProjectRepository } from "../interfaces/project-repository"

export class PrismaProjectRepository implements ProjectRepository {
    async findById(id: string) {
        const project = await prisma.project.findUnique({ where: { id } })

        if (!project) {
            return null
        }

        return ProjectEntity.create({ ...project })
    }

    async create({ id, props }: ProjectEntity) {
        const project = await prisma.project.create({ data: { id, ...props } })
        await prisma.projectUser.create({
            data: {
                projectId: id,
                userId: props.admin
            }
        })

        return ProjectEntity.create({ ...project })
    }
}
