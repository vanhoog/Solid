export class Menu {
    constructor() {
        $('.c-nav-toggle').on('click', this.toggle.bind(this));
        $('main').on('click', this.destroy.bind(this));
        $(window).resize(this.destroy.bind(this));
    }
    toggle(event){
        event.preventDefault();
        $('body').toggleClass('is-activeNav');
    }
    destroy() {
        if ($('.is-activeNav').length) {
            $('body').removeClass('is-activeNav');
        }
    }
}
