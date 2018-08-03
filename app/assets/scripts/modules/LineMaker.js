import $ from 'jquery';
require('../vendors/lineMaker.js');

class LineMaking {

	constructor () {
		this.drawLine();
	}

	drawLine() {
		var lineMaker = new LineMaker({
			position: 'fixed',
			lines: [
					{top: 0, left: '10%', width: 2, height: '100vh', color: '#343434', hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 600, direction: 'TopBottom' }},
					{top: 0, left: '90%', width: 2, height: '100vh', color: '#343434', hidden: true, animation: { duration: 1000, easing: 'easeOutSine', delay: 300, direction: 'TopBottom' }}
					]
			});

		setTimeout(function() {
			console.log("load");
			lineMaker.animateLinesIn();
		}, 250);
	}



		
}



export default LineMaking;