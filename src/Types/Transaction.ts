export interface Transaction {
  amount: number;
  title: string;
  description?: string;
  date: string;
  category: IncomeCategory | ExpenseCategory;
}

export interface Budget {
  category: ExpenseCategory;
  amount: number;
  date: string;
}

export type ExpenseCategory = "Food" | "Entertainment" | "Transportation" | "Housing" | "Repayment" | "Tax" | "Others";

export type IncomeCategory = "Salary" | "Benefits" | "Bonus" | "Others";