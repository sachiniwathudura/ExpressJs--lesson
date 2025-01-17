import express from 'express';
import customerRouter from "./routes/customer-routes";

const app = express();

app.use(express.json()); // Middleware to parse JSON

app.use("/customer", customerRouter);
app.listen(3000, () => {
    console.log('Server started at port 3000');
});
//
// import { addCustomer, getCustomerById, getAllCustomers, updateCustomer, deleteCustomer } from './database/local-data-store';
//
// const newCustomer = { customerId: "1", name: "Alice", address: "123 Main St" };
//
// // Add a new customer
// addCustomer(newCustomer);
//
// // Get a customer by ID
// const customer = getCustomerById("1");
// console.log(customer);
//
// // Get all customers
// const allCustomers = getAllCustomers();
// console.log(allCustomers);
//
// // Update a customer
// const updated = updateCustomer("1", { name: "Alice Updated",address:"galle" });
// console.log(updated ? "Customer updated successfully." : "Customer update failed.");
//
// // Delete a customer
// const deleted = deleteCustomer("1");
// console.log(deleted ? "Customer deleted successfully." : "Customer deletion failed.");