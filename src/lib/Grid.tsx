import * as React from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { TGridRow } from '../types'
import app from '../app'
import { useGrid } from '../hooks'
import s from '@styles/index.scss'

const Grid: React.FC<{ renderRow: Function }> = observer(({ renderRow }) => {
  const gridStore = useGrid()
  const onClickHeader = (event: React.MouseEvent<HTMLElement>): void => {
    const column: string = event.currentTarget.getAttribute(`data-column`)

    app.changeSort(column)
  }

  return (
    <>
      {gridStore.lastErrorMessage !== null ? (
        <>
          <h1 className={s.H1}>Something went wrong</h1>
          <p className={cn(s.Text, s.P)}>{gridStore.lastErrorMessage}</p>
        </>
      ) : gridStore.isLoading ? (
        <h1 className={s.H1}>Please wait, data is loading...</h1>
      ) : !!gridStore.grid.length ? (
        <div className={s.Grid}>
          <div className={s.Row}>
            {gridStore.columns.map((column: string) => (
              <div
                key={column}
                className={cn(s.Column, s.Cell, s.ColumnHeader)}
              >
                <div
                  className={cn(s.Name, {
                    [s.isSorted]: gridStore.sortColumn === column,
                  })}
                  data-column={column}
                  onClick={onClickHeader}
                >
                  {column}
                </div>
                {'\u00A0'}
              </div>
            ))}
          </div>
          {gridStore.grid.map((row: TGridRow, i: number) =>
            renderRow(i, gridStore.columns, row, s.Row, s.Cell)
          )}
        </div>
      ) : (
        <>
          <h1 className={s.H1}>No data loaded</h1>
          <p className={cn(s.Text, s.P)}>Nothing to show...</p>
        </>
      )}
    </>
  )
})

export default Grid
