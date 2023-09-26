export interface ProfileInterface{
    id: number,
    password: string,
    last_login: string,
    is_superuser: boolean,
    username: string,
    first_name:string,
    last_name:string,
    email:string ,
    is_staff: boolean,
    is_active: boolean,
    date_joined:string,
    status:string ,
    photo: string,
    groups: [],
    user_permissionstrings: []

}