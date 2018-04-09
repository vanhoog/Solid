var Fadein = function () {
    this.selector = ".js-fadein, .js-fadein-up, .js-fadein-down, .js-fadein-left, .js-fadein-right", this.body = $(document.body), this.window = $(window), this.resizeBound = this.resize.bind(this), this.scrollBound = this.scroll.bind(this), this.clear(), this.parse()
};
Fadein.prototype.clear = function () {
    this.window.off("resize", this.resizeBound), this.window.off("scroll", this.scrollBound), this.items = [], delete this.item
}, Fadein.prototype.parse = function (t) {
    t || (t = this.body);
    var i = t.filter(this.selector).add(t.find(this.selector));
    if (i.removeClass("show"), i.length) {
        var e;
        i.each(function (t, i) {
            i = $(i), e = i.hasClass("js-fadein-prio"), this.items.push({
                element: i,
                hold: parseInt(i.attr("data-fadein-hold") || 0),
                prio: e,
                prioSort: e ? 1 : 2,
                top: Number.MAX_VALUE
            })
        }.bind(this)), this.item || (this.window.on("resize", this.resizeBound), this.window.on("scroll", this.scrollBound)), $("img").on("load", this.resizeBound), this.resize()
    }
}, Fadein.prototype.set = function (t, i, e) {
    var o = '[class*="js-fadein"]',
        n = t.filter(o);
    e && (n = n.add(t.find(o))), n.toggleClass("show", i)
}, Fadein.prototype.reverse = function (t, i) {
    var e = t.filter(this.selector).add(t.find(this.selector));
    e.addClass("fadeout"), $.isFunction(i) && setTimeout(function () {
        i()
    }, 800)
}, Fadein.prototype.resize = function (t) {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function () {
        this.windowHeight = this.window.height(), this.documentHeight = $body.outerHeight() - .3 * this.windowHeight;
        var t, i;
        for (t = 0; t < this.items.length; t++) i = this.items[t], i.top = i.element.offset().top;
        this.items.sortOn("prioSort", "top"), this.item = this.items[0], this.scroll()
    }.bind(this), t ? 100 : 0)
}, Fadein.prototype.scroll = function (t) {
    if (t || (clearTimeout(this.timeout), delete this.timeout), this.item && !this.timeout) {
        var i = this.window.scrollTop(),
            e = i + this.windowHeight * (t ? .8 : 1);
        if (!WIDESCREEN || this.item.top <= e || i + this.windowHeight >= this.documentHeight) {
            this.item.element.addClass("show"), this.items.shift();
            var o = this.items[0];
            if (o) {
                var n = this.item.top < i || this.item.top == o.top ? 0 : 200 + this.item.hold;
                this.item = o, this.timeout = setTimeout(this.scrollBound, n)
            } else this.clear()
        }
    }
}, Fadein = new Fadein;
