jQuery('document').ready(function () {

    /*   Remove need to double click
    menu items with no children
    on iPads                         */
    jQuery('.jsMenuItemNoChildren').on('click touchend', function (e) {
        var el = jQuery(this);
        var link = el.attr('href');
        window.location = link;
    });

    /*   Height .megamenu and .promoted   */

    var heightPromoted = jQuery('.withPromoted .megamenu').height();
    jQuery('.withPromoted .promoted').height(heightPromoted + 22);
    

    jQuery('html.touch .visible_touch').click(function () {
        jQuery('.js_mm_trigger nav').css('display','none');
        jQuery('.mm_arrow').css('display', 'none');
    });

    jQuery('.js_promoted').parent().closest('nav').addClass('withPromoted');

   
    /*   Close pop_up on hover main menu */

    jQuery(".navFlag li").hover(function () {
        jQuery(".pop_up").css("display", "none");
        jQuery(".js_functions_arrow").css("display", "none"); 
    });

    /*   External link tracking */

    jQuery("a[target='_blank']").each(function () {
        var href = jQuery(this).attr('href');
        jQuery(this).click(function () {
            dyson.tracking.trackExternalLink(href);
        });
    });

    jQuery(".externalLink").each(function () {
        var href = jQuery(this).attr('href');
        jQuery(this).click(function () {
            dyson.tracking.trackExternalLink(href);
        });
    });

    jQuery(".js_productSliderButton").each(function () {
        var prodSlidertrackingName = jQuery(this).attr('data-tracking');
        jQuery(this).click(function () {
            dyson.tracking.trackProductSliderAction(prodSlidertrackingName);
        });
    });


    /* Time out for the focus in the search input */

    setTimeout("jQuery('.gsc-input').focus();", 3000);


    /*  megamenu  */

    /*  basket - social - language - search */

    jQuery('.navFlag > li').not(":has('ul')").removeClass('mm_trigger js_mm_trigger');
    jQuery('.navFlag > li').not(":has('ul')").removeClass('mm_trigger js_mm_trigger');

    jQuery("#js_basket").click(function () {
        jQuery(".js_basket").slideToggle("300");

        jQuery("#js_basket").find(".js_functions_arrow").toggle();
        jQuery(".js_social").css("display", "none");
        jQuery("#js_social").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_language").css("display", "none");
        jQuery("#js_language").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_search").css("display", "none");
        jQuery("#js_search").find(".js_functions_arrow").css("display", "none");
    });

    jQuery("#js_social").click(function () {
        jQuery(".js_social").slideToggle("300");
        jQuery("#js_social").find(".js_functions_arrow").toggle();
        jQuery(".js_basket").css("display", "none");
        jQuery("#js_basket").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_language").css("display", "none");
        jQuery("#js_language").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_search").css("display", "none");
        jQuery("#js_search").find(".js_functions_arrow").css("display", "none");
    });

    jQuery("#js_language").click(function () {
        jQuery(".js_language").slideToggle("300");
        jQuery("#js_language").find(".js_functions_arrow").toggle();
        jQuery(".js_basket").css("display", "none");
        jQuery("#js_basket").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_social").css("display", "none");
        jQuery("#js_social").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_search").css("display", "none");
        jQuery("#js_search").find(".js_functions_arrow").css("display", "none");
    });

    jQuery("#js_search").click(function () {
        jQuery(".js_search").slideToggle(function () {
            setTimeout("jQuery('.gsc-input').focus();", 2000);
        });

        jQuery("#js_search").find(".js_functions_arrow").toggle();
        jQuery(".js_basket").css("display", "none");
        jQuery("#js_basket").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_social").css("display", "none");
        jQuery("#js_social").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_language").css("display", "none");
        jQuery("#js_language").find(".js_functions_arrow").css("display", "none");
        setTimeout("jQuery('.gsc-input').focus();", 1000);
    });

    jQuery(".js_close_btn").click(function () {
        jQuery(".js_basket").slideUp("300");
        jQuery("#js_basket").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_social").slideUp("300");
        jQuery("#js_social").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_language").slideUp("300");
        jQuery("js_language.open").slideUp("300");
        jQuery("#js_language").find(".js_functions_arrow").css("display", "none");
        jQuery(".js_search").slideUp("300");
        jQuery("#js_search").find(".js_functions_arrow").css("display", "none");
    });

    jQuery(".js_language .js_close_btn").click(function () {
        jQuery(".js_language .js_search_element").css('display', 'none');
        jQuery(".js_language").removeClass('open');
    });

    jQuery(".js_language .js_close_btn").click(function () {
        jQuery(".js_language .js_search_element").css('display', 'none');
        jQuery(".js_language").removeClass('open');
    });

    /* Right to left motif */

    jQuery('html[dir="rtl"] .rsSlide').each(function () {
        var wMotif = jQuery(this).find(".videoContentOverlay").width();
        jQuery(this).find(".slideExtraMotif").width(wMotif);

    });

    jQuery('html[dir="rtl"] .videoLayer').each(function () {
        var wMotif2 = jQuery(this).find(".videoContentOverlay").width();
        jQuery(this).find(".slideExtraMotif").width(wMotif2);

    });


    /*Underline Links*/

    jQuery(".contentItemLink").hover(function () {
        if (jQuery(this).attr('href') === undefined) {
            return;
        }
        jQuery(this).children(".widgetTitle").css("text-decoration", "underline");
    });
    jQuery(".contentItemLink").mouseout(function (event) {
        var e = event.toElement || event.relatedTarget;
        if (e.parentNode == this || e == this) {
            return;
        }
        jQuery(this).children(".widgetTitle").css("text-decoration", "none");

    });

    jQuery(".listMainWrapper").each(function () {
        var numberOfItems = jQuery(this).find("li").length;
        var numberOfNuggets = 2;
        if (jQuery(this).find("li").hasClass("ContentColumns4")) {
            numberOfNuggets = 4;
        }
        if (jQuery(this).find("li").hasClass("ContentColumns3")) {
            numberOfNuggets = 3;
        }
        for (var i = 0; i < numberOfItems; i = i + numberOfNuggets) {
            jQuery(this).find("li.itemsWrapper").eq(i).children().css('border', 'none');
        }
    });

    /* Cookies banner  */

    jQuery('.js_cookiesBanner').slideDown('slow');
    jQuery('.js_cookiesBanner button').click(function () {
        jQuery('.js_cookiesBanner').slideUp('300');
    });


    /* Video */

    jQuery('.js_play_button button').click(function () {
        jQuery('.js_text_video h2').css('display', 'none');
        jQuery('.js_text_video h3').css('display', 'none');
        jQuery('.js_play_button img').css('display', 'none');
        jQuery('.js_img-content').css('background', 'none');
        jQuery('.BrightcoveExperience').css('display', 'block');

    });


    jQuery('.js_img-content').click(function () {
        jQuery('.js_text_video h2').css('display', 'none');
        jQuery('.js_text_video h3').css('display', 'none');
        jQuery('.js_play_button').css('display', 'none');
        jQuery('.js_img-content').css('background', 'none');
        jQuery('.BrightcoveExperience').css('display', 'block');
    });

    /*Scrolling for FullPageCopy*/

    jQuery('a.jsSmoothAnchor').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
             && location.hostname == this.hostname) {

            var jQuerytarget = jQuery(this.hash);

            jQuerytarget = jQuerytarget.length && jQuerytarget || jQuery('[name=' + this.hash.slice(1) + ']');

            if (jQuerytarget.length) {

                var targetOffset = jQuerytarget.offset().top;

                jQuery('html,body').animate({ scrollTop: targetOffset }, 1000);

                return false;

            }

        }

    });


    /*  Fix in the search pop up  */

    jQuery('.navFlag li').mouseenter(function () {
        jQuery('table.gssb_c').css('display', 'none');
    });


    //------Video for Ipad-------
    var isiPad = navigator.userAgent.match(/iPad/i) != null;
    if (isiPad) {
        jQuery('.js_img-content .js_text_video h2').css('display', 'none');
        jQuery('.js_img-content .js_text_video h3').css('display', 'none');
        jQuery('.js_img-content .js_play_button').css('display', 'none');
        jQuery('.js_img-content .BrightcoveExperience').css('display', 'block');
    }


    /*  Active in tabbed carousel  */

    jQuery('.tabbed_tabs li').click(function () {
        jQuery(this).siblings('li').removeClass('active');
        jQuery(this).addClass('active');
    });

    setTimeout("jQuery('.tabbed_content li.active').css('color','#333333');", 400);

    /* Move carousel Caveats into footer */
    var caveats = [];
    jQuery('.js_CarouselCaveat').each(function (index, Element) {
        if (jQuery.inArray(jQuery.trim(this.innerHTML), caveats) == -1) {
            caveats.push(jQuery.trim(this.innerHTML));
        }
    });

    for (var i = 0; i < caveats.length; i = i + 1) {
        jQuery('.js_caveatsSummary').append('<p>' + caveats[i] + '</p>');
    }

});

jQuery(window).bind('load', function () {

    /*    Sub category range fade in    */

    jQuery('.js_product_img_1').animate({ "left": "0", "opacity": "5" }, 500, function () {
        jQuery('.js_product_img_2').animate({ "left": "0", "opacity": "5" }, 500, function () {
            jQuery('.js_product_img_3').animate({ "left": "0", "opacity": "5" }, 500);
        });
    });

    jQuery('.js_vertical_img1').show(function () {

        jQuery(this).fadeIn(300);
        jQuery(this).animate({ "left": "0", "opacity": "5" }, 800);

        jQuery('.js_vertical_img2').show(function () {

            jQuery(this).fadeIn(1200);
            jQuery(this).animate({ "left": "0", "opacity": "5" }, 600);
        });
    });


    jQuery('.js_horizontal_img1').show(function () {

        jQuery(this).fadeIn(300);
        jQuery(this).animate({ "left": "0", "opacity": "5" }, 800);

        jQuery('.js_horizontal_img2').show(function () {

            jQuery(this).fadeIn(1200);
            jQuery(this).animate({ "left": "0", "opacity": "5" }, 600);
        });
    });


    /*  Same height in all the content items grid  */

    var maxHeightWhite = 0;

    jQuery(".ContentItemsGridWhite .inner-Wrapper").each(function () {
        if (jQuery(this).height() > maxHeightWhite) { maxHeightWhite = jQuery(this).height(); }
    });

    jQuery(".ContentItemsGridWhite .inner-Wrapper").height(maxHeightWhite);



    var maxHeightGrey = 0;

    jQuery(".ContentItemsGridGrey .inner-Wrapper").each(function () {
        if (jQuery(this).height() > maxHeightGrey) { maxHeightGrey = jQuery(this).height(); }
    });

    jQuery(".ContentItemsGridGrey .inner-Wrapper").height(maxHeightGrey);


    /*used only where Range DropDrown exists */
    jQuery('.toolsDropDown').on('change', function () {
        var browseUrl = jQuery('[id*="option"]:selected').attr("data-url");
        var selectedValue = jQuery('[id*="option"]:selected').attr("value");
        jQuery(".goMachine").attr("href", browseUrl);
        jQuery("#selectedValue").attr("value", selectedValue);
    });

    jQuery(".goMachine").click(function () {
        if (jQuery(".goMachine").attr("href") == null) {
            $('.toolsDropDown').trigger('change');
        }
        dyson.tracking.trackRangeDropDrown($('[id*="option"]:selected').attr("data-tracking"));
    });

}); 

