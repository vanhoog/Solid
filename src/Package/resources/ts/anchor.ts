// export class Anchors {
//     anchors: any;
//     navHeight = $('nav').outerHeight();
//     constructor() {
//         this.anchors = [];
//         this.parse()
//
//     }
//
//     parse() {
//         let anchor;
//         $('.js-anchor').each(function(index, item) {
//             let items = $(item);
//             if(!items.data('anchor')){
//                 anchor = new Anchor(items);
//                 items.data('anchor', anchor);
//     			this.anchors.push(anchor);
//             }
//
//         }.bind(this));
//         this.hashchange();
//     }
//     hashchange() {
//         let hash  = window.location.hash.replace('#', '');
//         if (this.hash != hash || !e) {
//     		this.hash = hash;
//     		if (hash) {
//     			var i, item;
//     			for (i = 0; i < this.anchors.length; i++) {
//     				item = this.items[i];
//     				if (item.id == hash) {
//     					$(item.element).addClass('is-active');
//     					$bodyHtml.stop(true).animate({'scrollTop': item.target.offset().top - (this.navHeight + 20)});
//
//     				}else {
//     					$(item.element).removeClass('is-active');
//     				}
//     			}
//     		}
//     	}
//     }
// }
// //let anchors = new Anchors();
//
// class Anchor  {
//     element: any;
//     id: any;
//     target: any;
//     constructor(element) {
//         this.element = element;
//         this.id = this.element.attr('href').split('#').pop();
//
//         this.target = $('#' + this.id);
//         this.target.attr('id', 'js-' + this.id);
//         //this.element.on('click', this.click.bind(this));
//     }
//     // click() {
//     //     if(this.id == anchors.hash) {
//     //         anchors.hashchange();
//     //     }
//     // }
// }
