import $ from 'jquery';

class Portfolio {
	constructor() {
		this.thumbnails = $('.portfolio-thumbnail');
		this.thumbnailTitle = $('.portfolio-thumbnail__title');
		this.thumbnailImage = $('.portfolio-thumbnail__image');
		this.hovers();
	}

	hovers() {
		var that = this;
		this.thumbnails.each(function() {

			this.currentImage = $(this).find(that.thumbnailImage);
			this.currentTitle = $(this).find(that.thumbnailTitle);

			$(this).hover(function() {
				this.currentImage.toggleClass("portfolio-thumbnail__image--color");
				this.currentTitle.toggleClass("portfolio-thumbnail__title--is-active");
			})
		})
	}

	
}

export default Portfolio;