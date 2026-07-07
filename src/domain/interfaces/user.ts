export default interface Iuser {
    id:string,
    nome:string,
    username:string,
    senha:string
}

export interface IuserResponse extends Omit<Iuser, 'senha'> {}