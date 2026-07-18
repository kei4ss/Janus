export default interface Iuser {
    id:number,
    nome:string,
    username:string,
    senha:string
}

export interface IuserResponse extends Omit<Iuser, 'senha'> {}

export interface IAdm extends Iuser{
    cpf:string
}

export interface IAdmResponse extends Omit<IAdm, 'senha'>{}