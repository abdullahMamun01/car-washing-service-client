import { BaseEntity, TResponse } from "."

export type TUser = {
    _id?:string ,
    name: string ,
    email: string ,
    phone: string ,
    role?: 'user' | 'admin',
    address: string 
}


export type TUserResponse = TResponse<(TUser & BaseEntity )[]>