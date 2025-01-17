import express from "express";
import {Customer} from "../model/Customer";
import {customerAdd} from "../database/prisma-data-store";
import {addCustomer, deleteCustomer, getAllCustomers, updateCustomer} from "../database/local-data-store";

const router  = express();
router.post("/add",async (req,res) =>{

    const newCustomer  = req.body;
    try{
        await customerAdd(newCustomer);
        res.send('add customer');
    }catch(err){
        console.log(err);
    }
})

router.put("/update/:id",(req,res) =>{
    const id =+ req.params.id;
    const customers  = req.body;
    updateCustomer(id, customers)
    res.send('update customer')
})
router.delete("/delete/:id",(req,res) =>{
    const id =+req.params.id;
    deleteCustomer(id);
    res.send('delete customer')
})
router.get("/get",(req,res) =>{
    const customers = getAllCustomers();
    res.json(customers);
    res.send('get customer')
})
export default router;