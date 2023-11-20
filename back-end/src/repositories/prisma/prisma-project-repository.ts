import { ProjectEntity } from "@/entities/project-entity"
import { prisma } from "@/lib/prisma"
import { ProjectRepository } from "../interfaces/project-repository"

export class PrismaProjectRepository implements ProjectRepository {
    async findById(id: string) {
        const project = await prisma.project.findUnique({ where: { id } })

        return project
    }

    async create(data: ProjectEntity) {
        const project = await prisma.project.create({ data: data.props })

        return project
    }
}
