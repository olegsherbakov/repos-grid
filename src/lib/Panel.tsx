import * as React from 'react'
import { observer } from 'mobx-react'
import cn from 'classnames'

import { usePanel } from 'src/hooks'
import app from 'src/app'

import s from '@styles/index.scss'

const Panel: React.FC = observer(() => {
  const panelState = usePanel()
  const [isHidden, setHidden] = React.useState<boolean>(false)
  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void =>
    event.key === 'Enter' && app.loadRepos()
  const onChange = (event: React.ChangeEvent<HTMLInputElement>): void =>
    app.changeUsername(event.target.value)
  const onClick = (): void => app.loadRepos()
  const onDoubleClick = (event: React.MouseEvent<HTMLElement>): void =>
    event.target === event.currentTarget && setHidden(!isHidden)
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
