import { uuid } from "uuidv4"

export default class Project {
    public readonly id?: string

    // INFO: Estava reclamando que o nome não era iniciado. A "!" parece que resolveu esse 'alert'
    public name!: string
    public description?: string | null
    public admin!: string
    public created_at?: Date
    public updated_at?: Date

    constructor(props: Omit<Project, "id">, id?: string) {
        Object.assign(this, props)
        this.description = props.description

        if (!id) {
            this.id = uuid()
        }
    }
}
