import { randomUUID } from "node:crypto"

export interface BaseEntityProps {
    id?: string;
}

export class BaseEntity<T extends BaseEntityProps> {
    private _id: string
    public props: T

    protected constructor(props: T) {
        this._id = props.id ?? randomUUID()
        this.props = props
    }

    get id() {
        return this._id
    }
}
