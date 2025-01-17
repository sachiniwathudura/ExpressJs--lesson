//create a customer class
//create a customer array
import {Customer} from "../model/Customer";

const customers:Customer[]=[];


//create the crud methods for it
export function addCustomer(customer: { address: string; id: number; name: string }): void {
    customers.push(customer);
    console.log(`Customer added: ${JSON.stringify(customer)}`);
}

// Retrieve a customer by ID
export function getCustomerById(id : number): Customer | undefined {
    return customers.find(c => c.id === id);
}

// Retrieve all customers
export function getAllCustomers(): Customer[] {
    return customers;
}

// Update an existing customer
export function updateCustomer(customerId: number, updatedData: Partial<Customer>): boolean {
    const customerIndex = customers.findIndex((customer) => customer.id === customerId);
    if (customerIndex !== -1) {
        customers[customerIndex] = { ...customers[customerIndex], ...updatedData };
        console.log(`Customer update: ${JSON.stringify(customers)}`);
        return true;

    }
    return false;
}

// Delete a customer by ID
export function deleteCustomer(id : number): boolean {
    const index = customers.findIndex(c => c.id === id);
    if (index !== -1) {
        const deletedCustomer = customers.splice(index, 1)[0];
        console.log(`Customer deleted: ${JSON.stringify(deletedCustomer)}`);
        return true;
    }
    console.log(`Customer with ID ${id} not found.`);
    return false;

}