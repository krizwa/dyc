//This is a function for a responsive carousel
var jcarouselResponsive = function () {
    $('.jcarousel.carousel-stage')
        .on('jcarousel:create jcarousel:reload', function () {
            var element = $(this),
                width = element.innerWidth();
            // This shows 1 item at a time on carousel stage.
            // Divide `width` to the number of items you want to display,
            // eg. `width = width / 3` to display 3 items at a time.
            element.jcarousel('items').css('width', width + 'px');
        })
        .jcarousel();
};


//THUMBNAIL (is a second carousel with little imgs conected with the first)
var jcarouselThumbnails = function () {

    var connector = function (itemNavigation, carouselStage) {
        return carouselStage.jcarousel('items').eq(itemNavigation.index());
    };

    $(function () {
        // Setup the carousels. Adjust the options for both carousels here.
        var carouselStage = $('.carousel-stage').jcarousel();
        var carouselNavigation = $('.carousel-navigation').jcarousel();

        // We loop through the items of the navigation carousel and set it up
        // as a control for an item from the stage carousel.
        carouselNavigation.jcarousel('items').each(function () {
            var item = $(this);

            // This is where we actually connect to items.
            var target = connector(item, carouselStage);

            item
                .on('jcarouselcontrol:active', function () {
                    carouselNavigation.jcarousel('scrollIntoView', this);
                    item.addClass('active');
                })
                .on('jcarouselcontrol:inactive', function () {
                    item.removeClass('active');
                })
                .jcarouselControl({
                    target: target,
                    carousel: carouselStage
                });
        });
    });

    $('.jcarousel-wrapper .navigation').toggleClass("active");

    //END THUMBNAIL 
};

//CAROUSEL WITH THUMBNAIL ARROWS
var jcarouselThumbnailsArrows = function () {
    $('.jcarousel-wrapper .prev-navigation')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
                $(this).hide();
                $(".wrapperPrev").hide();
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
                $(this).show();
                $(".wrapperPrev").show();
            })
            .jcarouselControl({
                target: '-=6'
            });

    $('.jcarousel-wrapper .next-navigation')
            .on('jcarouselcontrol:inactive', function () {
                $(this).addClass('inactive');
                $(this).hide();
                $(".wrapperNext").hide();
            })
            .on('jcarouselcontrol:active', function () {
                $(this).removeClass('inactive');
                $(this).show();
                $(".wrapperNext").show();
            })
            .jcarouselControl({
                target: '+=6'
            });

    $('.jcarousel-wrapper .navigation .prev.prev-navigation').toggleClass("active");
    $('.jcarousel-wrapper .navigation .next.next-navigation').toggleClass("active");
};

function SetDefault() {
    jQuery.urlParam = function (name) {
        var results = new RegExp('[\\?&amp;]' + name + '=([^&amp;#]*)').exec(window.location.href);
        if (results == null) {
            return 0;
        }
        return results[1] || 0;
    };

    var queryStringValue = jQuery.urlParam("Default");

    switch (queryStringValue) {
        case "video":
            $("#lnkVideoThumbnail").click();
            break;
        case "360":
            $("#lnk360Image").click();
            break;
        case "hero":
            $("#lnkHeroImage").click();
            break;
        case "g":
            $("#lnkImages").click();
            break;
        default:
            $("#lnkDescription").click();
            break;
    }
};