import { ProfileInterface } from "src/app/dashboard/type/profile.interface"
import { CourseInterface } from "./course.interface"
import { ModuleInterface } from "./module.interface"
import { AllGroupsInterface } from "./allGroups.interface"

export interface GlobalInterface{
    isSuccess:boolean|null,
    errors:ErrorsInterface|null,
    user:ProfileInterface |null,
    managers:ProfileInterface[] | null,
    students:ProfileInterface[]|null,
    teachers:ProfileInterface[]|null,
    allCours:CourseInterface[]|null,
    module:ModuleInterface[]|null,
    groups:AllGroupsInterface[]|null,
}

export interface ErrorsInterface {
    msg:string
}

export interface OKmsg{
    msg:string,
    type?:string|null
}
