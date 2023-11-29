import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { FetchAllUserProjectsDTO } from "./fetch-all-user-projects-dto"
import { UserRepository } from "@/repositories/interfaces/user-repository"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"

export class FetchAllUserProjectsUseCase {
    constructor(
        private userRepository: UserRepository,
        private projectRepository: ProjectRepository
    ) { }

    async execute({ userId }: FetchAllUserProjectsDTO) {
        const userExists = await this.userRepository.findById(userId)

        if (!userExists) {
            throw new ResourceNotFound()
        }

        const projects = await this.projectRepository.findManyByUser(userId)

        return projects
    }
}
