import startApp from "./apresentation/http/app.js";
import {initializeDatabase} from "./infra/sequelize/db.js"

const main = async()=>{
    await initializeDatabase();
    startApp()
}

main()