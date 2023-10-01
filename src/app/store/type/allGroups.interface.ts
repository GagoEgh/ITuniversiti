import { ProfileInterface } from "src/app/dashboard/type/profile.interface"
import { CourseInterface } from "./course.interface"


export interface AllGroupsInterface{
    id:number,
    course:CourseInterface
    module:{
        id:number,
        course:CourseInterface,
        name:string,
        count:number,   
    },
    teacher:ProfileInterface,
    name:string,
    student_count:string
}
