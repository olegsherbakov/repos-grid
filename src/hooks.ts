import * as React from 'react'
import { MobXProviderContext } from 'mobx-react'

export function useStores() {
  return React.useContext(MobXProviderContext)
}

export function useGrid() {
  const {
    store: { isLoading, columns, sortColumn, grid, lastErrorMessage },
  } = useStores()

  return { isLoading, columns, sortColumn, grid, lastErrorMessage }
}

export function usePanel() {
  const {
    store: { username, isLoading },
  } = useStores()

  return { username, isLoading }
}
