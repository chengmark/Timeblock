// import zh.json
import zh from "./Translation/zh.json"

// add thousands separator and fixed to 2 decimal places
export const formatAmount = (amount: number) => amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")

export const lang = (key: keyof typeof zh) => zh[key]

export const buildArray = (length: number, defaultValue?: any) => Array.from({ length }, (_) => defaultValue);