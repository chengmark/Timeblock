import { Categories, SubCategories } from "../categories";

export interface Transaction {
  id: string;
  amount: number;
  title: string;
  description?: string;
  date: string;
  category: Categories
  subCategory: SubCategories
}

export interface Budget {
  category: ExpenseCategory;
  amount: number;
  date: string;
}

export type ExpenseCategory = "Food" | "Entertainment" | "Transportation" | "Housing" | "Repayment" | "Tax" | "Others";

export type IncomeCategory = "Salary" | "Benefits" | "Bonus" | "Others";