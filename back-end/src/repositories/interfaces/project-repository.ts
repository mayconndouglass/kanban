import { Prisma, Project } from "@prisma/client"

export interface ProjectRepository {
    create(data: Prisma.ProjectUncheckedCreateInput): Promise<Project>
    findById(id: string): Promise<Project | null>
}
