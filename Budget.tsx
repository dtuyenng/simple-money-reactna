interface Expense {
  id: number;
  name: string;
  amount: number;
  date: Date;
}

interface Budget {
  totalBudget: number;
  expenses: Expense[];
}

let monthlyBudget: Budget = {
  totalBudget: 5000,
  expenses: [
    { id: 1, name: "Warhammer", amount: 199.99, date: new Date("2023-11-24") },
    { id: 2, name: "Milk", amount: 2.99, date: new Date("2023-11-24") },
    { id: 3, name: "Bananas", amount: 1.95, date: new Date("2023-11-24") },
    { id: 4, name: "Cookies", amount: 3.5, date: new Date("2023-11-24") },
  ],
};

export default monthlyBudget;
