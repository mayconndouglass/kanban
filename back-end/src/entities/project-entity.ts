import { BaseEntity, BaseEntityProps } from "./base-entity"

interface ProjectEntityProps extends BaseEntityProps {
    name: string;
    description?: string;
    admin: string;
    createdAt: Date;
}

export class ProjectEntity extends BaseEntity<ProjectEntityProps> {
    static create(
        props: Omit<ProjectEntityProps, "createdAt"> & { createdAt?: Date }
    ) {
        const project = new ProjectEntity({
            ...props,
            createdAt: props.createdAt ?? new Date(),
        })

        return project
    }
}
