import {useState, useEffect} from 'react'
import cx from 'classnames'

import Hero from '../../sections/hero'
import Header from '../../sections/header'
import Content from '../../sections/contentSection'

import layout from '../../styles/layout.module.scss'
import global from '../../styles/global.module.scss'

export default () => {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const w = () => setWidth(window.innerWidth)
    w()
    window.addEventListener('resize', w)
    return () => window.removeEventListener('resize', w)
  })

  return (
    <>
      <Header width={width} />
      <Hero>
        <div className={cx(layout.f_col, layout.justify_end, layout.align_start, layout.h100_percent, layout.w100_percent, layout.container, global.text_white)}>
          <h1>Treehouse Vineyards</h1>
        </div>
      </Hero>
      <Content />
    </>
  )
}
