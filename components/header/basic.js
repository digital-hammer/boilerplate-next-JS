import React from 'react';
import cx from "classnames"
import local from 'styles/components/header/basic.module.scss'
import Link from "next/link"

export default ()=> {
    return (
        <nav className={cx(local.f_row, local.nav_bar, local.justify_end, local.align_center)}>
            <Link href="#">example</Link>
						<div className={local.divider}>|</div>
            <Link href="#">example</Link>
						<div className={local.divider}>|</div>
						<Link href="#">How It Works</Link>
        </nav>
       
    )
}
