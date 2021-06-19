import { ReactNode } from "react";

export type TRow = ReactNode;

export interface RowProps {
  left: TRow
  right: TRow
  display?: string
  justifyContent?: 'initial' | 'space-between' | 'space-around' | 'space-evenly'
  marginLeft?: number
  marginRight?: number
}
