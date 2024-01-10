import { json } from '@sveltejs/kit';
import * as argon2 from "argon2";
import { PrismaClient } from '@prisma/client'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

export async function POST({ request , cookies }) {
    const { username , password } = await request.json();
    try{
        const checkData : any = await prisma.users.findUnique({where:{email:username}})
        const loginSuccess : boolean =  await argon2.verify(checkData?.password,password)
        
        if (loginSuccess){
            const token = jwt.sign({ username:checkData.email }, "pakSudLorPorRich", { expiresIn: "48h" });
            cookies.set("token",token,{httpOnly:true , path:'/'})
            return json({token})
        }
        else{
            return json({err:"Password ไม่ถูกต้อง"},{status:503})
        }

    }catch(err){
        return json({ err:"ไม่พบข้อมูลผู้ใช้ คุณอาจยังไม่ได้สมัครสมาชิก" },{status:503})
    }
}
