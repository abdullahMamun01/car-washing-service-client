import { BaseEntity, TResponse } from "."

export type TUser = {
    _id?:string ,
    name: string ,
    email: string ,
    phone: string ,
    role?: 'user' | 'admin' | 'public',
    address: string ,
    image?:string
}

export type TUpdateProfile = {
    image?:File ,
    name:string ,
    phone:string ,
    address:string

}
export type TUserResponse = TResponse<(TUser & BaseEntity )[]>