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
        <h6>
          TREEHOUSE VINEYARDS INVITES YOU TO BECOME PART OF "THE CLUB"
        </h6>
        <p>
          Join The Wine Club for exclusive access to our “Hand-Crafted Wine”, 
          delivered right to your door! You will receive exclusive member only 
          benefits and advanced access to all of our Award Winning Wines. 
          You may choose to have wines shipped directly to you, 
          or select to pick up your wines at the winery. 
          Treehouse Vineyards is a quarterly Wine Club with billing 
          periods during the months of February, May, August and November.
        </p>
        <h3>STEP ONE:&nbsp;
          <span className={global.bold}>
            SAVE MONEY. DRINK MORE.
          </span>
        </h3>
        <h4 className={global.bold}>WINE TASTERS</h4>
        <ul>
          <li>Membership &ndash; Complimentary</li>
          <li>Quarterly shipments delivered to your door or pick up at Treehouse Vineyards</li>
          <li>Save an additional 5% off preferred wine pricing currently offered in Tasting Room</li>
          <li>Invitations to Exclusive Wine Club Events</li>
          <li>Access to all THV Events at a discounted ticket rate</li>
          <li>2 for 1 cover charges for any admission to our live music concert series</li>
          <li>Save 25% on Winery Gift Shop items (excluding any current promotional sale items)</li>
          <li>Complimentary glass of wine to celebrate your birthday upon your next visit</li>
          <li>2 Complimentary wine tastings per quarter</li>
          <li>Must purchase 12 bottles annually through quarterly shipments and/or Porch Pick-Ups.</li>
          </ul>
          <h3>OR</h3>
          <h4 className={global.bold}>WINE DRINKERS</h4>
          <p>Buy a minimum of 6 bottles of wine &amp; commit to purchasing this amount each quarter. An average quarterly cost of about $70-$130 plus shipping.</p>
          <ul>
          <li>Membership &ndash; Complimentary</li>
          <li>Quarterly shipments delivered to your door or pick up at Treehouse Vineyards</li>
          <li>Save an additional 5% off preferred wine pricing currently offered in Tasting Room</li>
          <li>Invitations to Exclusive Wine Club Events</li>
          <li>Access to all THV Events at a discounted ticket rate</li>
          <li>2 for 1 cover charges for any admission to our live music concert series</li>
          <li>Save 25% on Winery Gift Shop items (excluding any current promotional sale items)</li>
          <li>Complimentary glass of wine to celebrate your birthday upon your next visit</li>
          <li>2 Complimentary wine tastings per quarter</li>
          <li>Must purchase 24 bottles annually&nbsp; through quarterly shipments and/or Porch Pick-Ups</li>
        </ul>
        <p className={global.bold}>*By signing up for the Wine Drinkers membership, you agree to receive at least 4 shipments before canceling your membership. After which you may cancel at any time in writing.</p>
        <p className={global.bold}>Please note: These charges are estimations. The actual amount may vary depending on wines shipped or selected. You will be notified via email prior to the billing of your credit card.</p>
      
        <h3>STEP TWO:&nbsp;<a href="https://www.treehousevineyards.com/index.cfm?method=clubs.showClubList">JOIN NOW!</a></h3>
<p>Join our Wine Club and become part of the Treehouse Family. Call our Tasting Room at 704-283-4208 for additional details or email wineclub@treehousevineyards.com</p>
<div><strong><em>&ldquo;You will be glad you did.&rdquo;<br />&nbsp;<br /></em></strong></div>
<ul>
<li>Click&nbsp;<strong><a href="https://www.treehousevineyards.com/index.cfm?method=clubs.showClubList">HERE</a></strong>&nbsp;to Join Online or call to place your first initial order of 3 or 6 bottles.</li>
<li>When you visit Treehouse Vineyards, in person to complete the enrollment form you are official.</li>
<li>We will notify you via E-Mail each subsequent quarter to receive the request for your wine selections and to invite you to the members only Porch Pick-Up Party.</li>
</ul>
<h3>STEP THREE:&nbsp;<strong>LEARN ABOUT DELIVERY</strong></h3>
<p><strong>Details/Shipping</strong></p>
<ol>
<li>You will receive an email reminding you of the quarterly billing period two weeks prior to the shipment date. You may select the exact wines you want in your shipment during that time by responding to the email.</li>
<li>Reminders for outstanding orders will be provided via email and through text messaging.</li>
<li><strong>An adult over 21 must be present to sign for the package.</strong>&nbsp;NO RETURNS ON SHIPPED WINE. (Unless damaged in shipping) Shipping Charges are in addition to the wine purchase.</li>
</ol>
<p><strong>Quarterly Pre-Selected Wines are at the discretion of the Wine Maker.</strong></p>
<p>Shipping Charges:<br />Wine Tasters &ndash; $20 for 3 Bottles of Wine<br />Wine Drinkers-$25 for 6 Bottles of Wine</p>
      </div>
    </>
  )
}
