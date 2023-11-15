import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { createProjectDto } from "./create-project-dto"
import Project from "@/entities/project-entity"

export class CreateProjectUseCase {
    constructor(private projectRepository: ProjectRepository) {}

    async execute(data: createProjectDto): Promise<Project> {

        // TODO: check project already exists.

        const dataProject = new Project(data)
        const project = await this.projectRepository.create(dataProject)

        return project

    }
}
