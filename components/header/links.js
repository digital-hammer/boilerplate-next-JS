const store = {
	url: '/online-store',
	name: 'Online Store',
	menu: []
}

const history = {
	name: 'History',
	url: '/history'
}

const wineryAndWines = {
	name: 'Winery and Wines',
	url: '/winery-and-wines'
}

const awards = {
	name: 'Awards',
	url: '/awards'
}

const photoGallery = {
	name: 'Photo Gallery',
	url: '/photo-gallery'
}

const FAQs = {
	name: 'FAQs',
	url: '/faqs'
}

const testimonials = {
	name: 'Testimonials',
	url: '/testimonials'
}

const events = {
	name: 'Events',
	url: '/events'
}

const news = {
	name: 'News',
	url: '/news'
}


const weddings = {
	name: 'Weddings',
	url: '/weddings'
}

const privateEvent = {
	name: 'Private Event',
	url: '/private-events'
}

const treehouseRentals = {
	name: 'Treehouse Rentals',
	url: '/treehouse-rentals'
}

const aboutUs = {
	url: '/about-us',
	name: 'About Us',
	menu: [history, wineryAndWines, awards, photoGallery, FAQs, testimonials]
}

const newsAndEvents = {
	url: '/news-and-events',
	name: 'News and Events',
	menu: [events, news]
}

const wineClub = {
	url: '/wine-club',
	name: 'Wine Club',
}

const rentalsAndPrivateFunctions = {
	url: '/rentals-private-functions',
	name: 'Rentals and Private Functions',
	menu: [weddings, treehouseRentals, privateEvent]
}

const contact = {
	url: '/contact-us',
	name: 'Contact Us',
}

const nav = [
	store,
	aboutUs,
	wineClub,
	contact,
	newsAndEvents,
	rentalsAndPrivateFunctions,
]

export default nav