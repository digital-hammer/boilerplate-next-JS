import {useState, useEffect, useRef} from 'react'
import cx from 'classnames'

import Hero from '../../sections/hero'
import Header from '../../sections/header'
import Content from '../../sections/contentSection'

import layout from '../../styles/layout.module.scss'
import global from '../../styles/global.module.scss'

export default () => {
  const [width, setWidth] = useState(0)
  const animatedText = []
  useEffect(()=> animatedText.map((i)=> i.classList.add(global.animate_in_end)))
  useEffect(() => {
    const w = () => setWidth(window.innerWidth)
    w()
    window.addEventListener('resize', w)
    return () => window.removeEventListener('resize', w)
	}, [width])
	

  return (
    <>
      <Header width={width} />
      <Hero imageSrc='/images/pergolaHero.jpg' height='h40'>
        <div className={cx(layout.f_col, layout.justify_end, layout.align_start, layout.h100_percent, layout.w100_percent, layout.container, global.text_white)}>
          <h1 ref={(e)=> e && animatedText.push(e)} className={cx(global.animation, global.animate_in_top)}>
            Wine Club
          </h1>
        </div>
      </Hero>
      <div className={layout.container}>

      </div>
    </>
  )
}
