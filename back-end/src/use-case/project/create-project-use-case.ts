import { ProjectEntity } from "@/entities/project-entity"
import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { UserRepository } from "@/repositories/interfaces/user-repository"
import { createProjectDTO } from "./create-project-dto"

export class CreateProjectUseCase {
    constructor(
        private projectRepository: ProjectRepository,
        private userRepository: UserRepository
    ) { }

    async execute(data: createProjectDTO) {
        const userExists = await this.userRepository.findById(data.admin)

        if (!userExists) {
            throw new Error("Resource Not Found")
        }

        const project = ProjectEntity.create(data)

        await this.projectRepository.create(project)

        return project
    }
}
