// -----------------------------------------------------------
// DOCUMENT ON READY 
// -----------------------------------------------------------
$(function () {
    $body.addClass('js');
    Nav = new Nav();
});



// -----------------------------------------------------------
// NAVIGATION 
// -----------------------------------------------------------
var Nav = function() {
    $('.c-nav-toggle').on('click', this.toggle.bind(this));
    $('main').on('click', this.destroy.bind(this));
    $(window).resize(this.destroy.bind(this));
}

Nav.prototype.toggle = function(e) {
    e.preventDefault();
    $('body').toggleClass('is-activeNav');
}

Nav.prototype.destroy = function() {    
    if ($('.is-activeNav').length) {
        $('body').removeClass('is-activeNav');
    }
}
