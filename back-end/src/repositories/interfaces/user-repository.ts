import { UserEntity } from "@/entities/user-entity"
import { User } from "@prisma/client"

export interface UserRepository {
    create(data: UserEntity): Promise<User>
    findByEmail(email: string): Promise<User | null>
    findById(id: string): Promise<User | null>
}
