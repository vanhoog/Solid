class LoadMore {
    element = $('.js-LoadMore');
    constructor(){
        let loadmoreitems;
        this.element.each(function(index, item) {
            let element = $(item);
         loadmoreitems = new LoadMoreItems(item);
        }.bind(this))
    }
};

class LoadMoreItems  {
    element: any;
    items: any;
    text: any;
    trigger: any;
    constructor(item){
        this.element = $(item);
        this.items = this.element.find('li');
        this.text = this.element.attr('data-text');

        if (this.items.length <= 8)
        return;
        if (this.items.length > 8) {
            this.element.append('<div class="o-section-sub o-section-end u-center"><button class="c-btn c-btn--reverse c-btn--reverse-secondary js-btn">' + this.text + '</button></div>');
            this.items.hide();
            this.items.slice(0, 8).show();
        }
        this.trigger = this.element.find('.js-btn');
        this.trigger.on('click', this.more.bind(this))
    }

    more() {
        this.items.filter(':hidden').slice(0, 4).show();
        if (this.items.length == this.items.filter(':visible').length) {
            this.trigger.hide();
        }
    }

};

let loadmore = new LoadMore();
