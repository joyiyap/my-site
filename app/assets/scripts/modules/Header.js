import $ from 'jquery';
import smoothScroll from 'jquery-smooth-scroll';

class Header {
	constructor() {
		this.HeaderLink = $(".primary-nav a");
		this.addSmoothScroll();
	}

	addSmoothScroll() {
		this.HeaderLink.smoothScroll();
	}
}

export default Header;