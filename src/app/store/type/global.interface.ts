import { ProfileInterface } from "src/app/dashboard/type/profile.interface"

export interface GlobalInterface{
    isLoader:boolean,
    isSuccess:boolean,
    errors:ErrorsInterface|null,
    user:ProfileInterface |null,
    managers:any[] | null,
    students:any[]|null
}

export interface ErrorsInterface {
    msg:string
}

export interface OKmsg{
    msg:string,
    type?:string|null
}
