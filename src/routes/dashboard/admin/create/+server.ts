
import { PrismaClient } from '@prisma/client'
import { json } from '@sveltejs/kit';
const db = new PrismaClient()
import jwt from "jsonwebtoken";

export async function POST({cookies , request}){
    const { title , userEmail , description , downloadLink } = await request.json()
    const token :any = await cookies.get("token")
    try {
        const jwtData :any = await jwt.verify(token,"pakSudLorPorRich")
        if(!jwtData){
            throw new Error("การยืนยันตัวตนผิดพลาด กรุณาเข้าสู่ระบบอีกครั้ง")
        }
        const username :any = await jwtData?.username
        const userData :any = await db.users.findUnique({where:{email:username}})
        if(userData.role != "admin"){
            throw new Error("คุณไม่มีสิทธผู้ดูแล")
        }
        else{
            try{
                const data = await db.works.create({ data:{
                    title,
                    description,
                    owner:userEmail,
                    auther:username,
                    download:downloadLink
                } 
                })
                return json({msg:"บันทึกข้อมูลเรียบร้อย",data})
            }
            catch(err){
                return json({msg:"เกิดข้อผิดพลาดการบันทึกข้อมูล",err},{status:500})
            }
        }

    } catch (err) {
        return json({err},{status:503})
    }
}