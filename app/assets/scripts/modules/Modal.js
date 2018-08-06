import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $(".open-modal");
		this.modal = $(".modal");
		this.closeModalButton = $(".modal__close");		
		this.events();
	}


	events() {
		// click open modal button
		this.openModalButton.click(this.openModal);

		// click the X close modal button
		this.closeModalButton.click(this.closeModal.bind(this));

		// pushes any key
		$(document).keyup(this.keyPressHandler.bind(this));
	}


	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
			var current = this.getAttribute("data-target");
			$(current).addClass("modal--is-visible");
			return false;					
	}

	closeModal () {
		this.modal.removeClass("modal--is-visible");
	}
}

export default Modal;