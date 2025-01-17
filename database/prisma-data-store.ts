import {Customer} from "../model/Customer";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function customerAdd(customer : Customer) {
    try{
        await prisma.customer.create({
            data:{
                name:customer.name,
                address :customer.address,
            }
        })
        console.log('customer added successfully');
    }catch(err){
        console.log(err)
    }
}