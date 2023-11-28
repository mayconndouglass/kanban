import { BaseEntity } from "./base-entity"

interface ProjectEntityProps {
    name: string;
    description?: string | null;
    admin: string;
    createdAt: Date;
}

export class ProjectEntity extends BaseEntity<ProjectEntityProps> {
    static create(
        props: Omit<ProjectEntityProps, "createdAt"> &
        { id?: string, createdAt?: Date }
    ) {
        const { id, ...restData } = props

        const project = new ProjectEntity({
            ...restData,
            createdAt: props.createdAt ?? new Date(),
        }, id)

        return project
    }

    get admin() {
        return this.props.admin
    }
}
