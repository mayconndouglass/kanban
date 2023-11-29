import { ProjectRepository } from "@/repositories/interfaces/project-repository"
import { CreateColumnDTO } from "./create-column-dto"
import { ColumnRepository } from "@/repositories/interfaces/column-repository"
import { ColumnEntity } from "@/entities/column-entity"
import { ResourceNotFound } from "@/use-case/errors/resource-not-found-error"
import { NotAllowed } from "@/use-case/errors/not-allowed-error"

export class CreateColumnUseCase {
    constructor(
        private columnRepository: ColumnRepository,
        private projectRepository: ProjectRepository,
    ) { }

    async execute(data: CreateColumnDTO) {
        const projectExists = await this.projectRepository.
            findById(data.projectId)

        if (!projectExists) {
            throw new ResourceNotFound()
        }

        if (projectExists.admin !== data.adminId) {
            throw new NotAllowed()
        }

        const column = ColumnEntity.create(data)

        await this.columnRepository.create(column)

        return column
    }
}
