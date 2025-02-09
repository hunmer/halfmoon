var g_choose = {
    loadFile: (type) => {
        var file = 'icon/' + type + '.json';
        g_emoji.lastEmojiType = type;
        if (window.location.protocol == 'file:') {
            loadJs(file);
        } else {
            $.ajax({
                url: file,
                type: "GET",
                dataType: "jsonp"
            });
        }

    },
    loadJson: (data) => {
        var h = '';
        for (var icon of data) {
            h += '<div class="col-2 text-center" ><img data-action="select_icon" title="' + icon.n + '" class="content-fit p-5" src="' + icon.r + '"></div>';
        }
        $('#choose_list').html(h);
    },
    icon: {
        selected: (select) => {
            var name = select.value;
            if (name == 'default') {
                return g_choose.icon.initList();
            }
            g_choose.loadFile(name);

        },
        init: () => {
            g_choose.icon.initList();
            registerAction('select_icon', (dom, action, params) => {
            	dom = $(dom);
                if (dom.hasClass('bg-primary')) {
                        var d = $('.modal.show .icon_selecter');
                        console.log(dom);
                    if (dom[0].nodeName == 'IMG') {
                        var src = dom.attr('src');
                         d.find('i').hide();
                        d.find('img').attr('src', src).show();

                    } else {
                    	 
                            var icon = dom.attr('title');
                        d.find('i').html('').attr('data-icon', icon).attr('class', 'fa mx-auto font-size-20 ' + icon).show();
                        d.find('img').hide();
                    }
                    $('#modal-custom-1').attr('data-type', null).find('.modal-html').html('');
                        halfmoon.toggleModal('modal-custom-1');
                    return;
                }
                $('#icon_list i.bg-primary').removeClass('bg-primary');
                dom.addClass('bg-primary')
            });
        },
        initList: () => {
            g_icons = ["fa-font-awesome", "fa-caret-down", "fa-universal-access", "fa-flag", "fa-search", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-bandcamp", "fa-bath", "fa-bathtub", "fa-drivers-license", "fa-drivers-license-o", "fa-eercast", "fa-envelope-open", "fa-envelope-open-o", "fa-etsy", "fa-free-code-camp", "fa-grav", "fa-handshake-o", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-imdb", "fa-linode", "fa-meetup", "fa-microchip", "fa-podcast", "fa-quora", "fa-ravelry", "fa-s15", "fa-shower", "fa-snowflake-o", "fa-superpowers", "fa-telegram", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-times-rectangle", "fa-times-rectangle-o", "fa-user-circle", "fa-user-circle-o", "fa-user-o", "fa-vcard", "fa-vcard-o", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-restore", "fa-wpexplorer", "fa-adjust", "fa-american-sign-language-interpreting", "fa-anchor", "fa-archive", "fa-area-chart", "fa-arrows", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-balance-scale", "fa-ban", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-certificate", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-child", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-code", "fa-code-fork", "fa-coffee", "fa-cog", "fa-cogs", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-cube", "fa-cubes", "fa-cutlery", "fa-dashboard", "fa-database", "fa-deaf", "fa-deafness", "fa-desktop", "fa-diamond", "fa-dot-circle-o", "fa-download", "fa-edit", "fa-ellipsis-h", "fa-ellipsis-v", "fa-envelope", "fa-envelope-o", "fa-envelope-square", "fa-eraser", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gear", "fa-gears", "fa-gift", "fa-glass", "fa-globe", "fa-graduation-cap", "fa-group", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-i-cursor", "fa-image", "fa-inbox", "fa-industry", "fa-info", "fa-info-circle", "fa-institution", "fa-key", "fa-keyboard-o", "fa-language", "fa-laptop", "fa-leaf", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-location-arrow", "fa-lock", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-meh-o", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mobile", "fa-mobile-phone", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paw", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-plane", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-power-off", "fa-print", "fa-puzzle-piece", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quote-left", "fa-quote-right", "fa-random", "fa-recycle", "fa-refresh", "fa-registered", "fa-remove", "fa-reorder", "fa-reply", "fa-reply-all", "fa-retweet", "fa-road", "fa-rocket", "fa-rss", "fa-rss-square", "fa-search-minus", "fa-search-plus", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shield", "fa-ship", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-sitemap", "fa-sliders", "fa-smile-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-square", "fa-square-o", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-sticky-note", "fa-sticky-note-o", "fa-street-view", "fa-suitcase", "fa-sun-o", "fa-support", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-television", "fa-terminal", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-trash", "fa-trash-o", "fa-tree", "fa-trophy", "fa-truck", "fa-tty", "fa-tv", "fa-umbrella", "fa-university", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-user", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-video-camera", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wrench", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-ambulance", "fa-subway", "fa-train", "fa-genderless", "fa-intersex", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-mercury", "fa-neuter", "fa-transgender", "fa-transgender-alt", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-file", "fa-file-o", "fa-file-text", "fa-file-text-o", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-google-wallet", "fa-paypal", "fa-bitcoin", "fa-btc", "fa-cny", "fa-dollar", "fa-eur", "fa-euro", "fa-gbp", "fa-gg", "fa-gg-circle", "fa-ils", "fa-inr", "fa-jpy", "fa-krw", "fa-rmb", "fa-rouble", "fa-rub", "fa-ruble", "fa-rupee", "fa-shekel", "fa-sheqel", "fa-try", "fa-turkish-lira", "fa-usd", "fa-viacoin", "fa-won", "fa-yen", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-bold", "fa-chain", "fa-chain-broken", "fa-clipboard", "fa-columns", "fa-copy", "fa-cut", "fa-dedent", "fa-files-o", "fa-floppy-o", "fa-font", "fa-header", "fa-indent", "fa-italic", "fa-link", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-outdent", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-repeat", "fa-rotate-left", "fa-rotate-right", "fa-save", "fa-scissors", "fa-strikethrough", "fa-subscript", "fa-superscript", "fa-table", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-underline", "fa-undo", "fa-unlink", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows-alt", "fa-caret-left", "fa-caret-right", "fa-caret-up", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-backward", "fa-compress", "fa-eject", "fa-expand", "fa-fast-backward", "fa-fast-forward", "fa-forward", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-step-backward", "fa-step-forward", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-youtube-play", "fa-500px", "fa-adn", "fa-amazon", "fa-android", "fa-angellist", "fa-apple", "fa-behance", "fa-behance-square", "fa-bitbucket", "fa-bitbucket-square", "fa-black-tie", "fa-buysellads", "fa-chrome", "fa-codepen", "fa-codiepie", "fa-connectdevelop", "fa-contao", "fa-css3", "fa-dashcube", "fa-delicious", "fa-deviantart", "fa-digg", "fa-dribbble", "fa-dropbox", "fa-drupal", "fa-edge", "fa-empire", "fa-envira", "fa-expeditedssl", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-firefox", "fa-first-order", "fa-flickr", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-foursquare", "fa-ge", "fa-get-pocket", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glide", "fa-glide-g", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-gratipay", "fa-hacker-news", "fa-houzz", "fa-html5", "fa-instagram", "fa-internet-explorer", "fa-ioxhost", "fa-joomla", "fa-jsfiddle", "fa-lastfm", "fa-lastfm-square", "fa-leanpub", "fa-linkedin", "fa-linkedin-square", "fa-linux", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-mixcloud", "fa-modx", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-pagelines", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-product-hunt", "fa-qq", "fa-ra", "fa-rebel", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-renren", "fa-resistance", "fa-safari", "fa-scribd", "fa-sellsy", "fa-shirtsinbulk", "fa-simplybuilt", "fa-skyatlas", "fa-skype", "fa-slack", "fa-slideshare", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-soundcloud", "fa-spotify", "fa-stack-exchange", "fa-stack-overflow", "fa-steam", "fa-steam-square", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-tencent-weibo", "fa-themeisle", "fa-trello", "fa-tripadvisor", "fa-tumblr", "fa-tumblr-square", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-usb", "fa-viadeo", "fa-viadeo-square", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wikipedia-w", "fa-windows", "fa-wordpress", "fa-wpbeginner", "fa-wpforms", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yoast", "fa-youtube", "fa-youtube-square", "fa-h-square", "fa-hospital-o", "fa-medkit", "fa-stethoscope", "fa-user-md"];
            var h = `
			<div class="row" id="icon_list">
			<select class="form-control" id="select-1" onchange="g_choose.icon.selected(this);">
			<option value="" disabled>Select emoji</option>
			 <option value="default" selected>default</option>`;
            for (var name of ['kameleon', 'streamline-colors', 'pixel', 'cyber-line', 'cyber-duotone', 'streamline-balloon', 'kawaii-emoji', 'freebies-freemojis']) {
                h += ' <option value="' + name + '">' + name + '</option>'
            }
            h += `
			</select>
                        <input class="form-control w-12 m-10" placeholder="` + _l('弹出_图标选择_搜索') + `" oninput="g_choose.search(this.value)">
                        <div id="choose_list" class="row">
			`;
            for (var icon of g_icons) {
                h += '<div class="col-2 text-center"><i title="' + icon + '" data-action="select_icon" class="fa ' + icon + ' icon_small mb-10" aria-hidden="true"></i></div>';
            }
            h += '</div>'
            $('#modal-custom-1').find('.modal-title').html(_l('弹出_图标选择_标题'));
            $('#modal-custom-1').attr('data-type', 'icon').find('.modal-html').html(h);
            if (!closeModal('modal-custom-1', 'icon')) {
                halfmoon.toggleModal('modal-custom-1');
            }
        }
    },
    search: (s) => {
    	s = s.toLowerCase();
        for (var d of $('[data-action="select_icon"]')) {
            d = $(d);
            d.parent().css('display', d.attr('title').toLowerCase().indexOf(s) != -1 ? 'unset' : 'none');
        }
    }
}

// g_choose.icon.init();