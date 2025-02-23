import {z} from 'zod';

export const usernamevalidattion =  z.string().min(2,"Username must be atleastt 2 Characters").max(20,"Username must be not more than 20 Characters").regex(/^[a-zA-Z0-9_]+$/,"Username must not contain special character")

export const signUpSchema = z.object({
    username:usernamevalidattion,
    email:z.string().email({message:'Invalid email address'}),
    password:z.string().min(6,{message:"password must be atleast 6 characters "})
})