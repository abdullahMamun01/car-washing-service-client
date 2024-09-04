export type TUser = {
    name: string ,
    email: string ,
    phone: string ,
    role?: 'user' | 'admin',
    address: string 
}