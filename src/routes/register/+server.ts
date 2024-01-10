import { json } from '@sveltejs/kit';
import * as argon2 from "argon2";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function POST({ request }) {
    const { username , password } = await request.json();
    const hashPassword = await argon2.hash(password)
    
    const checkEmail = await prisma.users.findUnique({where:{email:username}})
    if  (checkEmail == null){
        try{
            const data = await prisma.users.create({data:{email:username,password:hashPassword,role:"user"}})
            return json({ data:"created account" }, { status: 201 });
        }
        catch(err){
            console.log(err);
            return json({err},{status:503})
        }
    }
    else{
        return json({err:"มีบัญชีนี้อยู่แล้ว"},{status:406})
    }

}
