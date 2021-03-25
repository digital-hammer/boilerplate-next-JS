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
            FAQs
          </h1>
        </div>
      </Hero>
      <div className={layout.container}>
			<h2>CAN I HAVE A PARTY AT YOUR VINEYARD?</h2>
<p>Yes, we do host parties here at Treehouse Vineyards.</p>
<p>We are an ADULT VENUE and have many folks join us for small to large parties. The parties need to be for people 21 years of age or older. We do not host children&rsquo;s parties here at our winery and vineyards.</p>
<p>For private parties please email our Event Coordinator your event&rsquo;s details so we can provide you with venue rental fees. Email&nbsp;<a href="mailto:torie@treehousevineyards">torie@treehousevineyards</a>.</p>
<p>Many folks also choose to rent our VIP pavilion area tables during LIVE AT THE VINES music nights. The table rentals are $35 for a table that seats 8 people. You can rent multiple tables to accommodate your guest list. Keep in mind there is a cover charge of $3-$5 on Friday and Saturday nights that your party guests will incur. You can also PRE-PURCHASE the cover charge for each of your guests. Please call us to make these arrangements. 704-283-4208.<br />&nbsp;</p>
<h2>CAN WE BRING A FRISBEE OR FOOTBALL TO THROW AT YOUR VINEYARDS?</h2>
<p>We can not allow sports play in our community grassy areas due to the risk of people being hit by a ball or Frisbee.</p>
<p>We do have corn hole that can be played while you are enjoying an afternoon or evening with us.<br />&nbsp;</p>
<h2>CAN WE FISH IN THE POND?</h2>
<p>Fishing is only allowed for guests of Papa&rsquo;s Dream Treehouse.<br />&nbsp;</p>
<h2>DO I NEED A RESERVATION FOR A TOUR OR A TASTING?</h2>
<p>We do NOT need reservations&nbsp; unless you have a group of 10 or more. Simply arrive 10 minutes before the hour to check in for a tasting/tour.<br />&nbsp;</p>
<h2>DO YOU ACCOMMODATE GROUPS FOR WINE TASTINGS?</h2>
<p>Absolutely! Our facility can accommodate small or large groups. Please allow enough time for us to check your group in (which will include checking all government issued picture IDs verifying all are 21 and over).&nbsp; It is suggested to call us and inform our tasting room staff of your party size but not required.</p>
<h3>&nbsp;</h3>
<h2>DO YOU OFFER HORSEBACK RIDING?</h2>
<p>No, we currently do not offer horseback riding.</p>
<h3>&nbsp;</h3>
<h2>DO YOU RENT TABLES DURING LIVE MUSIC EVENTS?</h2>
<p>Yes, we rent tables for people to enjoy our live at the vines music events that take place YEAR ROUND!</p>
<p>Renting a table, a firepit or the Date Nite treehouse does not include any cover charges for the evening events.</p>
<p>You and your guests will incur any cover charge for the live music happening the night of your rental.</p>
<h3><strong>THE TABLE OPTIONS ARE:</strong></h3>
<p><strong>In our covered open air pavilion:</strong></p>
<p>We have 5ft round tables that seat 8 people &ndash; $35.00 from 7:00-10:00pm</p>
<p><strong>In our covered tent area:</strong></p>
<p>We have medium sized patio style wrought iron tables that seats 4 people &ndash;&nbsp;<strong>$20.00</strong>&nbsp;from 7:00-10:00pm</p>
<p>We also have small wrought iron tables that seats 2 people &ndash;&nbsp;<strong>$10.00</strong>&nbsp;from 7:00-10:00</p>
<p>Simply give us a call at 704-283-4208 and we will reserve your table!</p>
<p>In addition we also have FIRE PITS for rent in the FALL/WINTER/EARLY SPRING.The rental fee is $35. Four rocking chairs are provided and a table for snacks and drinks. You may bring supplemental chairs for extra guests.</p>
<p>In the SUMMER we rent our &ldquo;VINE VERANDAS&rdquo; which is a separate VIP gathering area near the vines for small to medium sized groups. The rental fee is $35. Four rocking chairs are provided and a table for snacks and drinks. You may bring supplemental chairs for extra guests.</p>
<h3>&nbsp;</h3>
<h2>DO YOU RENT THE DATE NITE TREEHOUSE IN THE WINTER?</h2>
<p>Yes wed do!&nbsp; During the winter, the inside can be enjoyed with up to 4 people. There is a small space heater inside. You can bring a picnic plus a blanket as well.</p>
<p>It can be rented during our LIVE AT THE VINES Saturday night concerts. You CAN HEAR the music from the pavilion inside the treehouse!</p>
<h3>&nbsp;</h3>
<h2>DO YOU SELL FOOD?</h2>
<p>Yes, we offer a great variety of gourmet&nbsp; Boarshead cheeses and yummy snacks. A fantastic gourmet Pimento cheese as well.</p>
<p>You are also welcome to bring your own food for a picnic. (other than special events such as our Spring and Harvest Festivals.)</p>
<h3>&nbsp;</h3>
<h2>HOW CAN I FIND OUT WHICH DATES ARE AVAILABLE FOR THE TREEHOUSES?</h2>
<p>We have an online booking system! To view available dates and make reservations see our Treehouse Rental Page.</p>
<h3>&nbsp;</h3>
<h2>HOW CAN I REQUEST TO BE A VENDOR AT ONE OF YOUR FESTIVALS?</h2>
<p>We have 3 festivals per year that we invite&nbsp;<strong>food and craft vendors</strong>&nbsp;to be a part of. The fees range between $25 and $50.</p>
<p>Vendors need to pay in advance their non-refundable booth rental. All vendors must provide their own tent and tables or display items needed. Vendors will be in a grassy area near our vines. We have VERY LIMITED space for vendors to set up and are ONLY INTERESTED in hand made crafts and the like for our festival vendors.</p>
<p>Vendors will be&nbsp;<strong>contacted by phone</strong>&nbsp;if we have space and are accepting you as a vendor. Do NOT assume you are a vendor just by filling out a form.</p>
<p><strong>Please fill out and submit the form below for the WINE STOCK FESTIVAL on July 25.</strong></p>
<p><a href="https://docs.google.com/forms/d/11N12n-gMXS0IseXhf9vqRKNFkGhqjElcmiDIeMXr-yI/viewform?c=0&amp;w=1" target="_blank">https://docs.google.com/forms/d/11N12n-gMXS0IseXhf9vqRKNFkGhqjElcmiDIeMXr-yI/viewform?c=0&amp;w=1</a></p>
<p><strong>Please fill out and submit the form below for the HARVEST GRAPE STOMP FALL FESTIVAL. We will not be booking venders until July or August.</strong></p>
<p><a href="https://docs.google.com/forms/d/1rOsWZVlaBpnnsY7fpDuwDEXa9dZX0KAUrTx9hCiodQk/viewform?c=0&amp;w=1">https://docs.google.com/forms/d/1rOsWZVlaBpnnsY7fpDuwDEXa9dZX0KAUrTx9hCiodQk/viewform?c=0&amp;w=1</a></p>
<p>You can mail a check to 301 Bay Street Monroe NC 28112. We can also take a credit card by phone for payment.We will be in touch with you to collect payment.</p>
<p>We have limited space for vendors so we except them on a first come first serve basis. We do not guarantee that there will not be an overlap of goods or products sold.</p>
<p>If you have any questions please call 704-283-4208</p>
<h3>&nbsp;</h3>
<h2>HOW DO I RENT A FIRE PIT AND WHAT DOES IT INCLUDE?</h2>
<p>We rent fire pits in the cooler months September-May for $35 for a 2 hours or $55 for 4 hours on Friday or Saturday nights. There is a small table and 4 rocking chairs at each fire pit. We light the pit for you and there is wood near by to add as needed.</p>
<p><strong>If you rent on Saturday night during our LIVE AT THE VINES music series you will also incur the cover charge for that evening.</strong></p>
<h3>&nbsp;</h3>
<h2>HOW DO TREEHOUSE RESERVATIONS WORK?</h2>
<p>Visit our Treehouse Rental page for all the information on booking, pricing, cancellations and more. Everything can be done right from the web!</p>
<h3>&nbsp;</h3>
<h2>HOW LONG DOES A TOUR AND TASTING TAKE?</h2>
<p>Tours and tastings each take up to an hour, depending on the size of the group and how busy we are. Please give yourself 45 minutes to one hour during the week and an hour to an hour and a half on weekends.</p>
<p>We offer tastings 7 days a week at the beginning of each hour.</p>
<p>Tours are available daily at 1:30, 3:30, and 5:30pm.</p>
<p>Large tastings are done in our open air pavilion Saturdays and Sundays.</p>
<p>During the week the tastings are done in our indoor tasting room.</p>
<h3>&nbsp;</h3>
<h2>HOW TO BUY A GIFT CARD</h2>
<p>You can purchase a gift card by phone with a credit or debit card and we can mail the card to you or to the recipient. We offer gift cards in any denomination and they can be used towards any rentals, goods or services at Treehouse Vineyards.</p>
<p>Gift cards can also be purchased for Treehouse stays.&nbsp; You can purchase the gift cards for the reservation amount for any of our treehouses.</p>
<p>You can purchase by phone or in person. If you purchase by phone we can mail the gift card. If you are purchasing in our Tasting Room we can provide you with an activated gift card and envelope upon purchase.</p>
<h3>&nbsp;</h3>
<h2>IS TREEHOUSE VINEYARDS FAMILY FRIENDLY?</h2>
<p>Yes, we do welcome families to Treehouse Vineyards with the understanding that this is an ADULT venue intended for adults to come enjoy wine and relax. If you do bring children with you, there should be no swinging, running, yelling or horseplay. We ask this in order to keep a enjoyable experience for ALL of our guests.</p>
<p>We ask that there be no children in the Date Nite treehouse by themselves, or in the vines&nbsp; by themselves or near the pond. For safety reasons you must keep children with you at all times. No exceptions.</p>
<p>We are not a suitable venue for children&rsquo;s gatherings of any kind such as birthday parties etc. We are an ADULT venue that focuses on the enjoyment of wine which is alcohol.</p>
<h3>&nbsp;</h3>
<h2>WHAT DO I DO IF I HAVE A DEAL PURCHASED ONLINE (I.E. GROUPON/LIVING SOCIAL/ETC.)?</h2>
<p>You may use your online purchased deal anytime except our festival dates. (see online calendar of events)</p>
<p>We offer DAILY tastings and tours. We are open 7 days a week.</p>
<p><em><strong>Weekend Tastings</strong></em>&nbsp;are held on the hour.</p>
<p>Last tasting will be at 6pm on Saturdays and 5pm on Sundays. Check back to our homepage for more information.</p>
<p><em><strong>WEEKDAY Tastings</strong></em>&nbsp;are done on the hour 12:00-6:00pm</p>
<p><em><strong>Daily Tours</strong></em>&nbsp;are offered at 1:30, 3:30 &amp; 5:30pm</p>
<p>Wine making tours are not of the vineyards but of the wine making process. There is very little walking. There is some extended standing.</p>
<p>Please bring your printed voucher with you or pulled up voucher on your smart phone.</p>
<p>Check your deal for an expiration. Deals normally expire in 6 months to a year from date of purchase. Paid value never expires but your promotional value will expire. We do not extend promotional value expirations.</p>
<h3>&nbsp;</h3>
<h2>WHAT IS MUSCADINE WINE?</h2>
<p>Muscadine wine is a sweeter wine made from the Muscadine grape, which is native to southeast United States. Our Muscadine wines range from off-dry to sweet.</p>
<h3>&nbsp;</h3>
<h2>WHAT IS THERE TO DO AT THE VINEYARDS BESIDES TASTINGS AND TOURS?</h2>
<p>Please feel free to spend as long as you want enjoying our property. There are swings under the trees, plenty of spaces for picnics, areas to walk and enjoy the vines. We do have corn hole sets and swings.</p>
<p>We also have live music on Friday and Saturday (when we do not have a private event booked) nights from 7:00-10:00pm YEAR ROUND!</p>
<p>Please check our online calendar for details of the bands.</p>
<p>We also have fun Friday night events such as Art classes, Trivia, Bingo, Murder Mystery Plays. See our online calendar for scheduled events.</p>
<p>Also, we are only one mile from downtown Monroe, home of great shopping and a couple of&nbsp; restaurants! Be sure to ask us for recommendations and make downtown Monroe part of your Treehouse Vineyards trip.</p>
<h3>&nbsp;</h3>
<h2>WHEN ARE TASTINGS AND TOURS HELD?</h2>
<p>Tastings and tours are held daily. Tastings are offered at the top of each hour. Tours are offered daily at 1:30, 3:30 and 5:30pm.</p>
<p>Please refer to our calendar for the most up-to-date times available.</p>
<p>Arrive 10 minutes before the hour to check in for a tasting/tour.</p>
<p>Last tasting will be at 6pm on Saturdays and 5pm on Sundays. Check back to our homepage for more information.</p>
<h3>&nbsp;</h3>
<h2>WHERE SHOULD I STAY IF I COME VISIT TREEHOUSE VINEYARDS ?</h2>
<p>Here are two hotels that are with-in 10 minutes of our vineyards:</p>
<p>HOLIDAY INN EXPRESS:<br />Address: 2505 W Roosevelt Blvd, Monroe, NC 28110<br />Phone: (704) 774-1779</p>
<p>Call and get the Treehouse Vineyards special rate</p>
<p>A free hot breakfast buffet is served daily. There&rsquo;s also an indoor pool, patio, fitness/business centers, 2 meeting rooms and guest laundry. Parking is free.</p>
<p>HAMPTON INN:&nbsp;<a href="https://www.hilton.com/en/hampton/" target="_blank">https://www.hilton.com/en/hampton/</a><br />2368 Roland Dr, Monroe, NC 28110<br />(704) 220-2200</p>
      </div>
    </>
  )
}
