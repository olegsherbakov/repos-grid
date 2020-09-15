export type TGridRow = { [key: string]: any } & { name: string | null }

export interface IStore {
  lastErrorMessage: string | null
  isLoading: boolean
  username: string
  data: TGridRow[]
  grid: TGridRow[]
  columns: string[]
  sortColumn: string
}

export interface ISortFn {
  (column: string, a: TGridRow, b: TGridRow): number
}
