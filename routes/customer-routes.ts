import express from "express";
import {Customer} from "../model/Customer";
import {addCustomer, deleteCustomer, getAllCustomers, updateCustomer} from "../database/local-data-store";

const router  = express();
router.post("/add",(req,res) =>{
    console.log((req.body.name));
    const newCustomer :Customer = req.body;
    addCustomer(newCustomer);
    res.send('add customer');
})

router.put("/update/:id",(req,res) =>{
    const id =+ req.params.id;
    const customers :Customer = req.body;
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