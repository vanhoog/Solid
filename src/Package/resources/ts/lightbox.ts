export class Lightbox {
    element = $('.js-lightbox');
    items: any;
    itemsArray = [];
    constructor() {
        let openItem;
        this.items = this.element.find('li');
        this.items.each((index, item) => {
            let Lightboxitem = $(item);
            this.itemsArray.push(Lightboxitem);
            let openItem = new LightboxItem(index, item);

        });
        console.log(this)
    }

}

class LightboxItem {
    element: any;
    index: any;

    constructor(index, item) {
        this.element = item;
        this.index = index;
        //this.element.find('.js-lightbox__inner').on('click', this.click.bind(this));
        console.log(this.element);
        //this.itemsArray = itemsArray;
        //console.log(Lightbox.itemsArray);
    //    console.log(this.element, this.index);

    }
    click(event){
        event.preventDefault()
    //    console.log();
    }
}
// class LightboxItems {
//     element: any;
//     index: any;
//     lightbox = $('.c-lightbox');
//     src: any;
//     type: any;
//     img: any;
//     videoElement: any;
//     closeBtn: any;
//     constructor(index, items) {
//         this.element = items;
//         this.index = index;
//         if(!this.lightbox.length) return;
//         this.element.find('.js-lightbox__inner').on('click', this.open.bind(this));
//         this.src = this.element.find('.js-lightbox__inner').attr('href');
//         this.type = this.element.attr('data-type');
//         this.img = `<div class='c-lightbox__imgwrapper'>
//                         <img class='c-lightbox__image' src='${this.src}' />
//                         <button class='c-lightbox__close'>
//                             <span class='u-accessibility'>Close</span>
//                         </button>
//                         <button>Prev</button>
//                         <button class="js-next">Next</button>
//                     </div>`;
//         this.videoElement = `<div class='u-video c-lightbox__video'>
//                                 <iframe width='560' height='315' src='${this.src}' frameborder='0' allow='autoplay; encrypted-media' allowfullscreen></iframe>
//                                 <button class='c-lightbox__close'>
//                                     <span class='u-accessibility'>Close</span>
//                                 </button>
//                             </div>`;
//
//
//     }
//     open(event) {
//         event.preventDefault();
//         this.lightbox.addClass('u-is-visible');
//         if (this.type == 'video') {
//             this.lightbox.find('.c-lightbox__inner').append(this.videoElement);
//         }else if (this.type == 'image') {
//             this.lightbox.find('.c-lightbox__inner').append(this.img);
//         }
//         this.closeBtn = this.lightbox.find('.c-lightbox__close');
//         this.closeBtn.on('click', this.close.bind(this));
//         console.log(this.index);
//
//
//     }
//     next(event) {
//         event.preventDefault();
//         console.log(this.index + 1)
//     }
//     close() {
//         this.lightbox.removeClass('u-is-visible');
//         $('.c-lightbox__inner').empty();
//     }
//
// }
