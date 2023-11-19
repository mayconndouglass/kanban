import { v4 as uuidv4 } from "uuid"

interface UserEntityProps {
    id?: string
    name: string
    email: string
    passwordHash: string
}

export class UserEntity {
    public id: string
    public name: string
    public email: string
    public passwordHash: string

    constructor(props: UserEntityProps) {
        this.id = props.id ?? uuidv4()
        this.name = props.name
        this.email = props.email
        this.passwordHash = props.passwordHash
    }
}
