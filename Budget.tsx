interface Expense {
  id: number;
  name: string;
  amount: number;
  date: Date;
}

interface Budget {
  id: number;
  budgetName: string;
  totalBudget: number;
  expenses: Expense[];
}

let monthlyBudget: Budget = {
  id: 1,
  budgetName: "My Budget",
  totalBudget: 5000,
  expenses: [
    { id: 1, name: "Warhammer", amount: 199.99, date: new Date("2023-11-24") },
    { id: 2, name: "Milk", amount: 2.99, date: new Date("2023-11-24") },
    { id: 3, name: "Bananas", amount: 1.95, date: new Date("2023-11-24") },
    { id: 4, name: "Cookies", amount: 3.5, date: new Date("2023-11-24") },
    { id: 5, name: "Gundams", amount: 23.5, date: new Date("2023-11-24") },
    // { id: 6, name: "Toys", amount: 3.5, date: new Date("2023-11-24") },
    // { id: 7, name: "Gas", amount: 23.2, date: new Date("2023-11-24") },
    // { id: 8, name: "Drinks", amount: 13.5, date: new Date("2023-11-24") },
    // { id: 9, name: "Drinks", amount: 13.5, date: new Date("2023-11-24") },
    // { id: 10, name: "Toys", amount: 3.5, date: new Date("2023-11-24") },
    // { id: 11, name: "Gas", amount: 23.2, date: new Date("2023-11-24") },
    // { id: 12, name: "Drinks", amount: 13.5, date: new Date("2023-11-24") },
    // { id: 13, name: "Drinks", amount: 13.5, date: new Date("2023-11-24") },
    // { id: 14, name: "Stuff", amount: 13.5, date: new Date("2023-11-24") },
  ],
};

export default monthlyBudget;
