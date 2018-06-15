import { Menu } from "./menu";
import { LoadMore } from "./loadMore";
import { Lightbox } from "./lightbox";
import { FadeIn } from "./fade";
import { Anchors } from "./anchor";

$(function() {
    let menu = new Menu();
    let loadmore = new LoadMore();
    let lightbox = new Lightbox();
    let fadein = new FadeIn();
    let anchors = new Anchors();
    anchors.parse();
});
