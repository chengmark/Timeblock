import { buildArray } from "./utils"

export const isLayoutArray = (value: any): value is (number | string)[] => Array.isArray(value)
export const hasNElements = (value: any[], n: number) => value.length === n && value.every(element => !!element)
export const is2Elements = (value: Layout): value is (number | string)[] => isLayoutArray(value) && value.length === 2
export const is4Elements = (value: Layout): value is (number | string)[] => isLayoutArray(value) && value.length === 4
export const isYX = is2Elements
export const isTRBL = is4Elements
export const isTLtoTR = is4Elements // [TL, BL, BR, TR]
export const exceptSide = (value: number | string, side: Sides) => buildArray(4).fill(value).map((spacing, i) => i === side ? 0 : spacing)

export enum Sides { TOP = 0, RIGHT = 1, BOTTOM = 2, LEFT = 3}
export type Layout = number | (number | string)[] | string
export type LayoutXY = string | number