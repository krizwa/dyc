<div id="carouselCarousel" class="xlrgSlider rsDefault">

    <div id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="uk_ctc_winter_2014">
        <img src="http://www.dyson.co.uk:80/medialibrary/Group/Carousels/SlideBackground/HomePage/CTC_UK-HOMEPAGE_BG.ashx" alt="" width="1000" height="784" />
        <div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned PromoextralrgParagraph " data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 150px;
            width: 400px; z-index: 1">
            <h2 style="color: #0066cc!important;">
                Up to £70 off
            </h2>
            <p style="color: #000000">
                Dyson cordless vacuums.
            </p>
            <a id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl00_standardSlide_carouselContentControl_ButtonLink" class="ButtonLight blue" onclick="dyson.tracking.trackCarouselAction(&#39;carouselcarousel&#39;,&#39;uk_ctc_winter_2014&#39;)" href="cut-the-cord.aspx.html">Shop now</a>
        </div>
        <div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px" style="left: px; top: px;">
        </div>
    </div>

    <div id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl01_standardSlide_StandardSlideDiv" data-trackingname="uk_christmas_gifting_2014">
        <img src="http://www.dyson.co.uk:80/medialibrary/Group/ShopContent/SpecialOffers/GB_Christmas_Gifting_2014/Christmas%20Carousel%20DC58.ashx" alt="" width="1000" height="784" />
        <div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  " data-move-effect="left" data-move-offset="20px" style="left: 640px; top: 340px;
            width: 390px; z-index: 1">
            <h2 style="color: #000000!important;">
                A present that<br/>solves everyday<br>problems.
            </h2>
            <p style="color: #000000">
            </p>
            <a id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl01_standardSlide_carouselContentControl_ButtonLink" class="ButtonYellow" onclick="dyson.tracking.trackCarouselAction(&#39;carouselcarousel&#39;,&#39;uk_christmas_gifting_2014&#39;)" href="vacuum-cleaners/handheld.aspx.html">Find out how</a>
        </div>
        <div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px" style="left: 640px; top: 280px;">
            <img src="http://www.dyson.co.uk:80/medialibrary/Group/Motifs/Vacuums/DC58_motif_black.ashx" alt="" width="36" height="50" />
        </div>
    </div>

    <div id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl02_standardSlide_StandardSlideDiv" data-trackingname="am05_homepage_carousel">
        <img src="http://www.dyson.co.uk:80/medialibrary/Group/Carousels/SlideBackground/HomePage/AM05_homepage_FirstFrame_1000x784.ashx" alt="Dyson Hot + Cool" width="1000" height="784" />
        <div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  " data-move-effect="left" data-move-offset="20px" style="left: 500px; top: 310px;
            width: 350px; z-index: 1">
            <h2 style="color: #FFFFFF!important;">
            </h2>
            <p style="color: #FFFFFF">
                Fast, even room heating. High velocity air to cool.
            </p>
            <a id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl02_standardSlide_carouselContentControl_ButtonLink" class="ButtonLight" onclick="dyson.tracking.trackCarouselAction(&#39;carouselcarousel&#39;,&#39;am05_homepage_carousel&#39;)" href="fans-and-heaters/heaters.aspx.html">Explore</a>
        </div>
        <div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px" style="left: 500px; top: 280px;">
            <img src="http://www.dyson.co.uk:80/medialibrary/Group/Motifs/FamilyNames/Dyson_Hot_and_Cool_white.ashx" alt="Dyson Hot + Cool" width="274" height="45" />
        </div>
    </div>
    
</div>

<script type="text/javascript">
    (function() {
    
        function iOSVersion() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            }
        }
        var ver = iOSVersion();
        if (jQuery('html').hasClass('ipad')) {
            if (ver[0] <= 6) {
                jQuery('.hideFromTablet').next('script').remove();
                jQuery('.hideFromTablet').remove();
                var preloadTrigger = 0;
            } else {
                var preloadTrigger = 4;
            }
        } else {
            var preloadTrigger = 4;
        }
        var slidercarouselCarousel = $('#carouselCarousel').royalSlider({
            keyboardNavEnabled: false,
            autoScaleSlider: false,
            imageScaleMode: 'none',
            slidesSpacing: 0,
            navigateByClick: false,
            addActiveClass: true,
            allowCSS3: true,
            arrowsNavAutoHide: false,
            numImagesToPreload: preloadTrigger,
            controlNavigation: 'bullets',
            loop: false,
            arrowsNav: true,
            sliderTouch: true,
            sliderDrag: true,
            autoPlay: {
                enabled: true,
                pauseOnHover: true,
                delay: 5000
            }
        }).data('royalSlider');
    
        jQuery('#carouselCarousel .rsArrowLeft').hide();
        jQuery('#carouselCarousel .rsArrowRight').show();
    
        if (3 == 1) {
            jQuery('#carouselCarousel .rsArrowRight').hide();
        }
    
        // push the slider into a collection
        dyson.storage.sliders.push(slidercarouselCarousel);
        var collectionIndex = dyson.storage.sliders.length - 1;
    
        // set up the video slides, if they exist
        dyson.video.videoSlideSetup(slidercarouselCarousel, collectionIndex);
    
        slidercarouselCarousel.ev.on('rsBeforeMove', function(event, type, userAction) {
    
            // User initiated slide change (not autoplay)
            if (userAction) {
                var slideId = slidercarouselCarousel.currSlideId;
                if (type == 'next') {
                    slideId++;
                } else if (type == 'prev') {
                    slideId--;
                } else {
                    slideId = type;
                }
    
                var slidename = slidercarouselCarousel.slides[slideId].content.attr('data-trackingname');
                dyson.tracking.trackCarouselSlideChange('carouselCarousel', slidename);
            }
        });
    
        slidercarouselCarousel.ev.on('rsAfterSlideChange', function(event) {
    
            function findCategoryObject(object) {
                var elem = object;
                if ("categoryRangeCarousel" == elem.attr("id")) {
                    return true;
                }
                if (elem.attr("class") == "wrapper_content") {
                    return false;
                }
                return findCategoryObject(elem.parent());
            }
    
            var categoryObj = findCategoryObject($(event.currentTarget.currSlide.content));
            if (categoryObj) {
                // var index = $('.rsActiveSlide').index();
                var index = slidercarouselCarousel.currSlideId;
                index++;
                var categoryThumbClasss = ".category_thumb" + index;
                $(categoryThumbClasss).trigger('click');
            }
    
            if (slidercarouselCarousel.currSlideId == (3 - 1)) {
                jQuery('#carouselCarousel .rsArrowRight').hide();
            } else {
                jQuery('#carouselCarousel .rsArrowRight').show();
            }
            if (slidercarouselCarousel.currSlideId == 0) {
                jQuery('#carouselCarousel .rsArrowLeft').hide();
            } else {
                jQuery('#carouselCarousel .rsArrowLeft').show();
            }
            jQuery(".videoSlide").parent(".rsSlide").css('overflow', 'visible');
        });
    
        if ("Normal" === "Light") {
            jQuery("#carouselCarousel .rsArrowIcn").addClass("greyImage");
    
        }
    })();
</script>