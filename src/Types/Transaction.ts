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
  id: string;
  category: Categories;
  amount: {
    daily: number
    weekly: number
    monthly: number
  }
  date: string;
}

export type Interval = 'DAILY' | 'WEEKLY' | 'MONTHLY'

export type ExpenseCategory = "Food" | "Entertainment" | "Transportation" | "Housing" | "Repayment" | "Tax" | "Others";

export type IncomeCategory = "Salary" | "Benefits" | "Bonus" | "Others";