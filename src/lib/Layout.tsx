import * as React from 'react'

import s from '@styles/index.scss'

const Layout: React.FC = ({ children }) => {
  return (
    <div className={s.Body}>
      <header className={s.Header}>Github repos list app</header>
      <section className={s.Content}>{children}</section>
      <footer className={s.Footer}>
        © {new Date().getFullYear()}{' '}
        <a href="mailto:oleg.sherbakov.85@gmail.com" rel="nofollow">
          oleg.sherbakov.85@gmail.com
        </a>
      </footer>
    </div>
  )
}

export default Layout
