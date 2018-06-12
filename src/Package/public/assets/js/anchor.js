// -----------------------------------------------------------
// DOCUMENT READY
// -----------------------------------------------------------
$(function() {
	Anchors = new Anchors();

});



// -----------------------------------------------------------
// ANCHORS
// -----------------------------------------------------------
var Anchors = function() {

	this.items = [];
	this.parse();
	$window.on('hashchange', this.hashchange.bind(this));

}

Anchors.prototype.parse = function() {

	var anchor;
	$('.js-anchor').each(function(index, item) {
		item = $(item);
		if (!item.data('anchor')) {
			anchor = new Anchor(item);
			item.data('anchor', anchor);
			this.items.push(anchor);

		}
	}.bind(this));

	this.hashchange();
}

Anchors.prototype.hashchange = function(e) {
	var hash = window.location.hash.replace('#', '');
	if (this.hash != hash || !e) {
		this.hash = hash;
		if (hash) {
			var i, item;
			for (i=0; i<this.items.length; i++) {
				item = this.items[i];
				if (item.id == hash) {
					$(item.element).addClass('is-active');
					$bodyHtml.stop(true).animate({'scrollTop': item.target.offset().top - 111});

				}else {
					$(item.element).removeClass('is-active');
				}
			}
		}
	}
}

// -----------------------------------------------------------
// ANCHOR
// -----------------------------------------------------------
var Anchor = function(element) {
	this.element = element;
	if (!this.element.length) return;
	this.element.on('click', this.click.bind(this));

	this.id = this.element.attr('href').split('#').pop();

	this.target = $('#' + this.id);
	this.target.attr('id', 'js-' + this.id);
}

Anchor.prototype.click = function(e) {
	console.log('test parse');
	if (this.id ==  window.location.hash.replace('#', '')) {
		Anchors.hashchange();
	}
}
