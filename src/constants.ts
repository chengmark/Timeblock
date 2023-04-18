import { ComponentType } from "react"
import { IconProps } from "react-native-vector-icons/Icon"
import { ExpenseCategory, IncomeCategory } from "./Types/Transaction"
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons"

export const REPEAT_MODE = {
  NO_REPEAT: "永不",
  DAILY: "每天",
  WEEKLY: "每周",
  MONTHLY: "每月",
  YEARLY: "每年",
}

export const TAG_COLOR = {
  red: "红色",
  orange: "橙色",
  yellow: "黄色",
  green: "綠色",
  cyan: "青色",
  blue: "藍色",
  purple: "紫色",
}

export const FONT_SIZE = {
  xs: 14,
  s: 16,
  m: 18,
  l: 20,
  xl: 24,
}

export interface IconObject {
  Icon: ComponentType<IconProps>
  name: string
  type: 'expense' | 'income'
}

export const CATEGORY_ICON_MAP:Record<(ExpenseCategory | IncomeCategory), IconObject> = {
  Food: {
    Icon: MaterialCommunityIcon,
    name: "food-outline",
    type: 'expense'
  },
  Transportation: {
    Icon: MaterialCommunityIcon,
    name: "car-outline",
    type: 'expense'
  },
  Entertainment: {
    Icon: MaterialCommunityIcon,
    name: "gamepad-variant-outline",
    type: 'expense'
  },
  Housing: {
    Icon: MaterialCommunityIcon,
    name: "home-outline",
    type: 'expense'
  },
  Repayment: {
    Icon: MaterialCommunityIcon,
    name: "credit-card-outline",
    type: 'expense'
  },
  Tax: {
    Icon: MaterialCommunityIcon,
    name: "file-document-outline",
    type: 'expense'
  },
  Others: {
    Icon: MaterialCommunityIcon,
    name: "dots-horizontal-circle-outline",
    type: 'expense'
  },
  Salary: {
    Icon: MaterialCommunityIcon,
    name: "cash-multiple",
    type: 'income'
  },
  Bonus: {
    Icon: MaterialCommunityIcon,
    name: "cash-refund",
    type: 'income'
  },
  Benefits: {
    Icon: MaterialCommunityIcon,
    name: "cash-usd",
    type: 'income'
  },
}