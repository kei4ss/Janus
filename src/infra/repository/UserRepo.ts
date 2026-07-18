import UserSequelizeModel from "../sequelize/models/UserSequelizeModel.js";
import Iuser from "../../domain/interfaces/user.js";

class UserRepository {
    async create(user: Omit<Iuser, "id">): Promise<Iuser> {
        const createdUser = await UserSequelizeModel.create(user);

        return createdUser.toJSON();
    }

    async findAll(): Promise<Iuser[]> {
        const users = await UserSequelizeModel.findAll();

        return users.map(user => user.toJSON());
    }

    async find(id: number): Promise<Iuser | null> {
        const user = await UserSequelizeModel.findByPk(id);

        if (!user) return null;

        return user.toJSON();
    }

    async update(
        id: number,
        data: Partial<Omit<Iuser, "id">>
    ): Promise<Iuser | null> {
        const user = await UserSequelizeModel.findByPk(id);

        if (!user) return null;

        await user.update(data);

        return user.toJSON();
    }

    async delete(id: number): Promise<boolean> {
        const deletedRows = await UserSequelizeModel.destroy({
            where: { id }
        });

        return deletedRows > 0;
    }
}

export default new UserRepository()