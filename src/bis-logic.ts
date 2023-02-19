import { UserModel } from "./model";
import { decode } from "./utils/indexu";



export const getuser = async (token: string) => {
    const { id } = decode(token)
    const user = await UserModel.findById(id)
    return user
};