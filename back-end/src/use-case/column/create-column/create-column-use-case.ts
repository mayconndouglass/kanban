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

    async execute({ name, projectId, adminId }: CreateColumnDTO) {
        const projectExists = await this.projectRepository.
            findById(projectId)

        if (!projectExists) {
            throw new ResourceNotFound()
        }

        if (projectExists.admin !== adminId) {
            throw new NotAllowed()
        }

        const column = ColumnEntity.create({ name, projectId })

        await this.columnRepository.create(column)

        return column
    }
}
