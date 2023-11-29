import { UserEntity } from "@/entities/user-entity"

export interface UserRepository {
    create(data: UserEntity): Promise<UserEntity>
    findByEmail(email: string): Promise<UserEntity | null>
    findById(id: string): Promise<UserEntity | null>
}
