import Iuser from './user.js'

export interface UserRepository{
    create(user:Omit<Iuser, "id">):Promise<Iuser>
    findAll():Promise<Iuser[]>
    find(id:number):Promise<Iuser | null>
    update(id:number, data: Partial<Omit<Iuser, "id">>):Promise<Iuser | null>
    delete(id:number):Promise<boolean>
}