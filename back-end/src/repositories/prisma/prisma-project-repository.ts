import { Prisma, Project } from "@prisma/client"
import { ProjectRepository } from "../interfaces/project-repository"
import { prisma } from "@/lib/prisma"

export class PrismaProjectRepository implements ProjectRepository {
    async findById(id: string) {
        const project = await prisma.project.findUnique({ where: { id } })

        return project
    }

    async create(data: Prisma.ProjectUncheckedCreateInput): Promise<Project> {
        const project = await prisma.project.create({ data })

        return project
    }

}
