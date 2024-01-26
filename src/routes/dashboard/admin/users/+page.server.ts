
import { PrismaClient } from '@prisma/client'
import { redirect } from '@sveltejs/kit';
const db = new PrismaClient()
import jwt from "jsonwebtoken";

export async function load({cookies }){

    const token :any = await cookies.get("token")
    try {
        const jwtData :any = await jwt.verify(token,"pakSudLorPorRich")
        if(!jwtData){
             throw await new Error("การยืนยันตัวตนผิดพลาด กรุณาเข้าสู่ระบบอีกครั้ง")
        }
        const username :any = await jwtData?.username
        const userData :any = await db.users.findUnique({where:{email:username}})
        if(userData.role != "admin"){
            throw await new Error("คุณไม่มีสิทธผู้ดูแล")
        }
        else{
            try{
                const users = await db.users.findMany()
                return  {users}
            }
            catch(err){
                return {msg:"เกิดข้อผิดพลาดการดึงข้อมูล",err,status:500}
            }
        }

    } catch (err) {
        return redirect(301,"/login")
    }
}