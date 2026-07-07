import IuserResponse from "./user.js";

export default interface Igoal {
    nome:string,
    descricao:string,
    dataInicio:Date,
    dataFim:Date,
    user:IuserResponse
}