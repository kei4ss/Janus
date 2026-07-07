import sequelize from "sequelize";

const db = new sequelize.Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging:false

});

export async function initializeDatabase():Promise<void>{
    console.log("INICIALIZANDO BANCO DE DADOS")
    await db.sync()
}


export default db;
