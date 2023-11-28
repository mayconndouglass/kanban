import { BaseEntity } from "./base-entity"

interface UserEntityProps {
    name: string
    email: string
    passwordHash: string
}

export class UserEntity extends BaseEntity<UserEntityProps> {
    static create(props: UserEntityProps & { id?: string }) {
        const { id, ...restData } = props
        const user = new UserEntity(restData, id)

        return user
    }
}
