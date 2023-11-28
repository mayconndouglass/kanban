import { ProjectEntity } from "@/entities/project-entity"

export interface ProjectRepository {
    create(data: ProjectEntity): Promise<ProjectEntity>
    findById(id: string): Promise<ProjectEntity | null>
}
