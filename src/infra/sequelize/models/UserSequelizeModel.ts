import db from "../db.js";
import { DataTypes, Model, InferAttributes, InferCreationAttributes, Optional } from "sequelize";
import Iuser from "../../../domain/interfaces/user.js";

interface ICreationUser extends Optional<Iuser, "id">{}

class UserSequelizeModel 
    extends Model<Iuser, ICreationUser>
    implements Iuser
{
    declare id: number;
    declare nome: string;
    declare username: string;
    declare senha: string;
}

UserSequelizeModel.init(
  {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    senha: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

import crypto from "crypto"
const alg = "sha256"

/**
 * Sei que estou cometendo um erro ao usar sha256 para criptografia de senhas,
 * porém o foco desse programa não está na segurança.
 */

UserSequelizeModel.beforeCreate((user:Iuser) => {
    if(user.senha.length > 6) {
        user.senha = crypto.createHash(alg).update(user.senha).digest('hex'); 
    }else{
        throw new Error("Password must be at least 6 characters long");
    }
});

export default UserSequelizeModel;