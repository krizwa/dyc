<div id="carouselCarousel1" class="lrgSlider rsDefault">
	<div id="ctl00_content_0_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="dc50_intro_concentratedtech">
		<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Large/DC50_Intro_1000x560.ashx.jpeg" alt="DC50 with Radial root cyclones" width="1000" height="560" />
		<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
			data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 200px;
			width: 335px; z-index: 1">
			<h2 style="color: #000000!important;"  >
				Concentrated technology. Performance of a full-sized upright.
			</h2>
			<p style="color: #000000">
			</p>
		</div>
		<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
			style="left: 80px; top: 130px;">
			<img src="/dyson/medialibrary/Group/Motifs/Vacuums/DC50_motif_black.ashx.png" alt="DC50 motif" width="36" height="50" />
		</div>
	</div>
</div>

<script type="text/javascript">
	(function () {
	
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
	    var slidercarouselCarousel1 = $('#carouselCarousel1').royalSlider({
	        keyboardNavEnabled: false,
	        autoScaleSlider: false,
	        imageScaleMode: 'none',
	        slidesSpacing: 0,
	        navigateByClick: false,
	        addActiveClass: true,
	        allowCSS3: true,
	        arrowsNavAutoHide: false,
	        numImagesToPreload: preloadTrigger,
	        controlNavigation: 'none',
	        loop: false,
	        arrowsNav: true,            
	        sliderTouch: false,
	        sliderDrag: false,
	        autoPlay: {
	            enabled: false,
	            pauseOnHover: true,
	            delay: 5000
	        }
	    }).data('royalSlider');
	    
	    jQuery('#carouselCarousel1 .rsArrowLeft').hide();
	    jQuery('#carouselCarousel1 .rsArrowRight').show();
	    
	    if (1 == 1) {
	        jQuery('#carouselCarousel1 .rsArrowRight').hide();
	    }
	
	    // push the slider into a collection
	    dyson.storage.sliders.push(slidercarouselCarousel1);
	    var collectionIndex = dyson.storage.sliders.length - 1;
	
	    // set up the video slides, if they exist
	    dyson.video.videoSlideSetup(slidercarouselCarousel1, collectionIndex);
	
	    slidercarouselCarousel1.ev.on('rsBeforeMove', function (event, type, userAction) {
	         
	        // User initiated slide change (not autoplay)
	        if ( userAction ) {
	            var slideId = slidercarouselCarousel1.currSlideId;
	            if (type == 'next') {
	                slideId++;
	            } else if (type == 'prev') {
	                slideId--;
	            } else {
	                slideId = type;   
	            }
	            
	            var slidename = slidercarouselCarousel1.slides[slideId].content.attr('data-trackingname');
	            dyson.tracking.trackCarouselSlideChange('carouselCarousel1', slidename);
	        }                             
	    });
	
	    slidercarouselCarousel1.ev.on('rsAfterSlideChange', function(event) {
	
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
	            var index = slidercarouselCarousel1.currSlideId;
	            index++;
	            var categoryThumbClasss = ".category_thumb" + index;
	            $(categoryThumbClasss).trigger('click');
	        }
	        
	        if (slidercarouselCarousel1.currSlideId == (1 - 1)) {
	            jQuery('#carouselCarousel1 .rsArrowRight').hide();
	        } else {
	             jQuery('#carouselCarousel1 .rsArrowRight').show();
	        }
	        if (slidercarouselCarousel1.currSlideId == 0) {
	            jQuery('#carouselCarousel1 .rsArrowLeft').hide();
	        } else {
	             jQuery('#carouselCarousel1 .rsArrowLeft').show();
	        }
	        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
	    });
	
	    if ("Normal" === "Light") {
	        jQuery("#carouselCarousel1 .rsArrowIcn").addClass("greyImage");
	
	    }
	})();   
</script>