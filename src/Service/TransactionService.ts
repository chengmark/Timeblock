// CRUD

import { get, off, onValue, ref, remove, set, Unsubscribe } from "firebase/database"
import { db } from "../firebase"
import { Transaction } from "../Types/Transaction"

const path = 'transactions/'

export const addTransaction = async (transaction: Transaction) => {
  set(ref(db, path+transaction.id), transaction)
}

export const listenTransactions = (onValueHandler?: (transaction: Transaction[]) => void):Unsubscribe => {
  const unsubscribe = onValue(ref(db, path), (snapshot) => {
    // empty transactions return a snapshot that its json() is null
    if(!snapshot.exists()) return onValueHandler?.([])
    const data = snapshot?.val()
    console.log('listen transactions:', Object.values(data));
    onValueHandler?.(Object.values(data))
  })
  return unsubscribe
}

export const getTransactions = async ():Promise<Transaction[]> => {
  const snapshot = await get(ref(db, path))
  if(!snapshot.exists()) return new Promise(r => r([]))
  const data = snapshot.val()
  return Object.values(data) as Transaction[]
}

export const getTransactionById = async () => {

}

export const updateTransaction = async () => {

}

export const deleteTransactionById = async (transactionId: string) => remove(ref(db, path+transactionId))

