import Iuser from "../interfaces/user.js";
import {IuserResponse, IAdm, IAdmResponse} from "../interfaces/user.js";

abstract class Customer{
    constructor(
        private id:number, 
        private nome:string, 
        private username:string, 
        private senha:string){
    }

    getId = ():number => this.id
    getnome = ():string => this.nome
    getusername = ():string => this.username
    getsenha = ():string => this.senha

}

export class UserEntitie extends Customer{
    getObject():Iuser{
        return {
            id:this.getId(),
            nome:this.getnome(),
            username:this.getusername(),
            senha:this.getsenha()
        }
    }
    toResponse():IuserResponse{
        return {
            id:this.getId(),
            nome:this.getnome(),
            username:this.getusername()
        }
    }
}

export class AdmEntitie extends UserEntitie{
    constructor(
        id:number, 
        nome:string, 
        username:string, 
        senha:string, 
        private cpf:string){
            super(id, nome, username, senha)
        }

    getObject():IAdm{
        return {
            ...this.getObject(),
            cpf:this.cpf
        }
    }
    toResponse():IAdmResponse{
        return {
            ...this.toResponse(),
            cpf:this.cpf
        }
    }
}