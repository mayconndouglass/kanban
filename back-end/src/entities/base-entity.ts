import { randomUUID } from "node:crypto"

export class BaseEntity<T> {
    private _id: string
    public props: T

    protected constructor(props: T, id?: string) {
        this._id = id ?? randomUUID()
        this.props = props
    }

    get id() {
        return this._id
    }
}
