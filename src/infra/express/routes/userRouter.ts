import {Router, Request, Response} from "express"
import Iuser from "../../../domain/interfaces/user.js"
import {IuserResponse} from "../../../domain/interfaces/user.js"
import userRepo from "../../sequelize/models/UserSequelizeModel.js"

const userRouter = Router()

userRouter.post("/", async (req:Request, res:Response)=>{
    const user:Iuser = await req.body
    console.log(`Os dados inseridos pelo usuário foram ${user}, os dados da requisição foram ${req.body}`)
    
    let status = 201;
    let msg = "User created"
    
    try{
        await userRepo.create(user)
    }catch(e){
        status = 500
        msg = "User wasn't created. Please, try again."
        console.log(e)
    }

    res.status(status).json({"msg": msg})
})

userRouter.get("/", async (req:Request, res:Response)=>{    
    
    try{
        res.status(200).json({
            data: await userRepo.findAll(),
            status: 200
        })
    }catch(e){
        res.status(500).json({
            data: "Problemas para encontrar usuarios, tente novamente mais tarde.",
            status: 500
        })
        console.log(e)
    }

    
})


export default userRouter