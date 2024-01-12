import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()
import jwt from "jsonwebtoken";

export async function load({request , cookies }) {

    const token :any = await cookies.get("token")
    try{
        const jwtData :any = await jwt.verify(token,"pakSudLorPorRich")
        const username :any = await jwtData?.username
        const userData :any = await db.users.findUnique({where:{email:username}})
        return {role:userData.role}
    }
    catch(err){
        await console.log(err);
    }

}