import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { CreateColumnDTO } from "./create-column-dto"
import { ColumnRepository } from "@/repositories/interfaces/column-repository"
import { ColumnEntity } from "@/entities/column-entity"

export class CreateColumnUseCase {
    constructor(
        private columnRepository: ColumnRepository,
        private projectRepository: ProjectRepository,
    ) { }

    async execute(data: CreateColumnDTO) {
        const projectExists = await this.projectRepository.
            findById(data.projectId)

        if (!projectExists) {
            throw new Error("Resource Not Found")
        }

        if (projectExists.admin !== data.adminId) {
            throw new Error("Not Allowed")
        }

        const column = ColumnEntity.create(data)

        await this.columnRepository.create(column)

        return column
    }
}
