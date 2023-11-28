import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { FetchAllUserProjectsDTO } from "./fetch-all-user-projects-dto"
import { UserRepository } from "@/repositories/interfaces/user-repository"

export class FetchAllUserProjectsUseCase {
    constructor(
        private userRepository: UserRepository,
        private projectRepository: ProjectRepository
    ) { }

    async execute(data: FetchAllUserProjectsDTO) {
        const userExists = await this.userRepository.findById(data.userId)
        console.log("Era para devolver nullo", userExists)
        if (!userExists) {
            throw new Error("Resource Not Found")
        }

        const projects = await this.projectRepository.findManyByUser(data.userId)

        return projects
    }
}
