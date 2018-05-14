class Nav {
    constructor() {
        $('.c-nav-toggle').on('click', this.toggle.bind(this));
        $('main').on('click', this.destroy.bind(this));
        $(window).resize(this.destroy.bind(this));
    }

    toggle(e) {
        e.preventDefault();
        $('body').toggleClass('is-activeNav');
    };

    destroy() {
        if($('.is-activeNav').length) {
            $('body').removeClass('is-activeNav');
        }
    }
}

let nav = new Nav();
