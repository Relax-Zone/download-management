import { redirect } from "@sveltejs/kit"
import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client'

const db = new PrismaClient()

export async function load({cookies}){
    const token :any = cookies.get("token")
    try{
        const jwtData :any = await jwt.verify(token,"pakSudLorPorRich")
        const username :any = await jwtData?.username
        const userData :any = await db.users.findUnique({where:{email:username}})
        const userWork :any = await db.works.findMany({where:{owner:username}})
        return { username , role:userData.role , userWork }
    }
    catch(err){
        return redirect(301,'/login')
    }
}