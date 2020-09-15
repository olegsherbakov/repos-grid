export type TGridRow = { [key: string]: string | null } & {
  name: string | null
}

export interface IStore {
  lastErrorMessage: string | null
  isLoading: boolean
  username: string
  data: TGridRow[]
  grid: TGridRow[]
  columns: string[]
  sortColumn: string
  setColumns: (columns: string[]) => IStore
  setSortFn: (sortFn: ISortFn) => IStore
}

export interface ISortFn {
  (column: string, a: TGridRow, b: TGridRow): number
}
