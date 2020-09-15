import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import { ISortFn, TGridRow } from 'src/types'
import app from 'src/app'
import Grid from '@lib/Grid'
import Layout from '@lib/Layout'
import Panel from '@lib/Panel'

const columns = [
  `name`,
  `language`,
  `url`,
  `homepage`,
  `description`,
  `created_at`,
]
const externalSortFn: ISortFn = (column, rowA, rowB): number => {
  const a = rowA[column]
  const b = rowB[column]

  if (a === null) {
    return -1
  }

  if (a === b) {
    return 0
  }

  return a < b ? -1 : 1
}
const store = app.bootstrapStore(columns, externalSortFn)
const renderRow = (
  i: number,
  columns: string[],
  row: TGridRow,
  rowClassName: string,
  cellClassName: string
) => (
  <div key={i} className={rowClassName}>
    {columns.map((column) => (
      <div key={column} className={cellClassName} title={row[column]}>
        <div
          style={{
            position: `absolute`,
            height: `100%`,
            width: `100%`,
            overflow: `hidden`,
            textOverflow: `ellipsis`,
            whiteSpace: `nowrap`,
            padding: `4px`,
          }}
        >
          {row[column]}
        </div>
        {'\u00A0'}
      </div>
    ))}
  </div>
)

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <Grid renderRow={renderRow} />
      <Panel />
    </Layout>
  </Provider>,
  document.getElementById(`app`)
)

export default app
