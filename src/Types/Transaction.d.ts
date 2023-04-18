export interface Expense {
  amount: number;
  title: string;
  description?: string;
  date: string;
  category: ExpenseCategory;
}

export interface Income {
  amount: number;
  title: string;
  description?: string;
  date: string;
  category: IncomeCategory;
}

export type Transaction = Expense | Income;

export interface Budget {
  category: ExpenseCategory;
  amount: number;
  date: string;
}

export type ExpenseCategory = "Food" | "Entertainment" | "Transportation" | "Housing" | "Repayment" | "Tax" | "Others";

export type IncomeCategory = "Salary" | "Benefits" | "Bonus" | "Others";