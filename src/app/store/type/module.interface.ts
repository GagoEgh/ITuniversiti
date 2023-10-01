import { CourseInterface } from "./course.interface"

export interface ModuleInterface{
    id:number,
    course:CourseInterface,
    name:string,
    count:number
}
