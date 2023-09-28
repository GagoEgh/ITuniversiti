import { ProfileInterface } from "src/app/dashboard/type/profile.interface"

export interface GlobalInterface{
    isSuccess:boolean|null,
    errors:ErrorsInterface|null,
    user:ProfileInterface |null,
    managers:ProfileInterface[] | null,
    students:ProfileInterface[]|null,
    teachers:ProfileInterface[]|null,
}

export interface ErrorsInterface {
    msg:string
}

export interface OKmsg{
    msg:string,
    type?:string|null
}
