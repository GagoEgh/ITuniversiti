import { IRequest } from "src/app/shared/model/request.interface";
import { ILogin } from "./login.interface";

export interface IAuthState{
    isLoad:boolean,
    login:ILogin|null,
    request:IRequest|null
}