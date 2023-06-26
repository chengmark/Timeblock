// CRUD

import { get, off, onValue, ref, remove, set, Unsubscribe } from "firebase/database"
import { db } from "../firebase"
import { Budget, Transaction } from "../Types/Transaction"

const path = 'budget/'

export const addBudget = async (budget: Budget) => {
  set(ref(db, path+budget.id), budget)
}

export const listenBudgets = (onValueHandler?: (budget: Budget[]) => void):Unsubscribe => {
  const unsubscribe = onValue(ref(db, path), (snapshot) => {
    // empty transactions return a snapshot that its json() is null
    if(!snapshot.exists()) return onValueHandler?.([])
    const data = snapshot?.val()
    console.log('listen budgets:', Object.values(data));
    onValueHandler?.(Object.values(data))
  })
  return unsubscribe
}

export const getBudgets = async ():Promise<Budget[]> => {
  const snapshot = await get(ref(db, path))
  if(!snapshot.exists()) return new Promise(r => r([]))
  const data = snapshot.val()
  return Object.values(data) as Budget[]
}

export const getBudgetByCategory = async (category: string):Promise<Budget> => {
  const snapshot = await get(ref(db, path+'/'+category))
  if(!snapshot.exists()) return new Promise(r => r({} as Budget))
  const data = snapshot.val()
  return data as Budget
}

export const getBudgetById = async () => {

}

export const updateBudget = async () => {

}

export const deleteBudgetById = async (budgetId: string) => remove(ref(db, path+budgetId))

