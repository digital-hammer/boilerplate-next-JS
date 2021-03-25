import cx from 'classnames'
import {useRef, useEffect} from 'react'
import Link from 'next/link'

import global from '../styles/global.module.scss'
import layout from '../styles/layout.module.scss'
import hs from '../styles/sections/header.module.scss'

export default (props) => {
	const {
		nav=[]
	} = props

  const menu = []
  const subMenu = []
	


	const factoryNavLink = (x, i) => {
		return (
			<Link key={i} href={x.url}>
				<div className={cx(hs.nav_link, global.text_black)}>
					{x.name}
				</div>
			</Link>
		)
	}
  return (
		<div className={cx(hs.mobile_nav, layout.f_row, layout.f_wrap)}>
			{nav.map((x, i)=> {
				return (
					<div className={hs.menu_item}>
						{factoryNavLink(x, i)}
						{x.menu && (
							<div className={cx(hs.sub_nav, layout.f_row, layout.f_wrap, layout.w100_percent, layout.justify_around)}>
								{x.menu.map((x, i)=> factoryNavLink(x, i))}
							</div>
						)}
					</div>
				)
			})}
		</div>
	)
}
