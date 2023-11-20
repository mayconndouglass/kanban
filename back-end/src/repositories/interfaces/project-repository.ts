import { ProjectEntity } from "@/entities/project-entity"
import { Project } from "@prisma/client"

export interface ProjectRepository {
    create(data: ProjectEntity): Promise<Project>
    findById(id: string): Promise<Project | null>
}
