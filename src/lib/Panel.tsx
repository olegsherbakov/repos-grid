import * as React from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { usePanel } from '../hooks'
import s from '@styles/index.scss'
import app from '../app'

const Panel: React.FC = observer(() => {
  const [isHidden, setHidden] = React.useState<boolean>(false)
  const panelState = usePanel()
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    event.keyCode === 13 && app.fetchData()
  }
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    app.changeUsername(event.target.value)
  const onClick = (): void => app.fetchData()
  const onDoubleClick = (event: React.MouseEvent<HTMLElement>): void => {
    if (event.target === event.currentTarget) {
      setHidden(!isHidden)
    }
  }
  const isDisabled = !panelState.username || panelState.isLoading

  return (
    <nav
      className={cn(s.Panel, { [s.PanelIsHidden]: isHidden })}
      onDoubleClick={onDoubleClick}
      title="click to hide panel"
    >
      <input
        type="text"
        value={panelState.username}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className={s.Input}
        placeholder="enter any username"
        autoComplete="off"
      />
      <br />
      <button onClick={onClick} disabled={isDisabled}>
        load repositories
      </button>
    </nav>
  )
})

export default Panel
