export class LoadMore {
    element = $('.js-LoadMore');
    constructor() {
        let loadMoreElements;
        this.element.each(function(index, item) {
            let items = $(item);
            const loadMoreElements = new LoadMoreElements(items);
        })
    }
}

export class LoadMoreElements {
    element: any;
    items: any;
    text: any;
    btn: any;
    constructor(items) {
        this.element = items;
        this.items = this.element.find('li');
        this.text =  this.element.attr('data-text');
        if (this.items.length > 2) {
            this.element.append(`
                <div class="o-section-sub o-section-end u-center">
                    <button class="c-btn c-btn--reverse c-btn--reverse-secondary js-btn" >${this.text}</button>
                </div>
            `)
            this.items.hide();
            this.items.slice(0, 2).show();
        }
        this.items.hide();
        this.items.slice(0, 2).show();
        this.btn = this.element.find('.js-btn');
        this.btn.on('click', this.more.bind(this));
    }

    more() {
        this.items.filter(':hidden').slice(0, 2).show();
        if (this.items.length == this.items.filter(':visible').length) {
            this.btn.hide();
        }
    }
}
