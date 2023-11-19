import { BaseEntity, BaseEntityProps } from "./base-entity"

interface UserEntityProps extends BaseEntityProps {
    name: string
    email: string
    passwordHash: string
}

export class UserEntity extends BaseEntity<UserEntityProps> {
    static create(props: UserEntityProps) {
        const user = new UserEntity(props)

        return user
    }
}
