import { observable, computed } from 'mobx'
import { endpoint } from '@octokit/endpoint'

import { IStore, ISortFn, TGridRow } from './types'

// declaration
class Store implements IStore {
  @observable
  public lastErrorMessage: string | null = null
  @observable
  public isLoading: boolean = false
  @observable
  public username: string = ``
  @observable
  public data: [] = []
  @observable
  public sortColumn: string = `name`
  @computed
  public get grid(): TGridRow[] {
    const result = this.data.map((row: TGridRow) =>
      this.columns.reduce<TGridRow>(
        (res, column) => {
          res[column] = row[column]

          return res
        },
        { name: null }
      )
    )

    return result.sort((a, b) => this.sortFn(this.sortColumn, a, b))
  }
  public columns: string[] = []
  setColumns(columns: string[]): this {
    this.columns = columns
    return this
  }
  private sortFn: ISortFn = (): number => {
    throw new Error(`sortFn is not defined`)
  }
  setSortFn(sortFn: ISortFn): this {
    this.sortFn = sortFn
    return this
  }
}

// implementation
const store = new Store()

function api(username: string): Promise<[]> {
  const { url, ...options } = endpoint('GET /users/:user/repos', {
    user: username,
    type: 'private',
  })

  return fetchRepos(url, options)
}
// wrapper for suppress of types api complexity
function fetchRepos<T>(url: string, options: any): Promise<T> {
  return fetch(url, options).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response.json()
  })
}

const bootstrapStore = (columns: string[], sortFn: ISortFn): Store => {
  return store.setColumns(columns).setSortFn(sortFn)
}

const fetchData = (): void => {
  if (!store.username) {
    return
  }

  store.isLoading = true

  api(store.username)
    .then((result) => {
      store.lastErrorMessage = null
      store.isLoading = false
      // check results
      store.data = result
    })
    .catch((err) => {
      store.lastErrorMessage = err.toString()
      store.isLoading = false
    })
}

const changeUsername = (username: string): void => {
  store.username = username
}

const changeSort = (column: string): void => {
  if (column === store.sortColumn) {
    return
  }

  store.sortColumn = column
}

export default {
  bootstrapStore,
  changeUsername,
  fetchData,
  changeSort,
}
