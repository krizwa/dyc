<div id="carouselCarousel7" class="smlSlider rsDefault">
					<div id="ctl00_content_13_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="gb_jansale_2015_hmc_panel">
						<img src="/dyson/medialibrary/Group/ShopContent/SpecialOffers/GB_January_Sale/Competitor Page Revision.ashx.png" alt="" width="1000" height="260" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentCentered  "
							data-move-effect="left" data-move-offset="20px" style="left: 510px; top: 60px;
							width: 450px; z-index: 1">
							<h2 style="color: #0066cc!important;"  >
								A clean start to the New Year.
							</h2>
							<p style="color: #000000">
								Save up to £120 on Dyson technology.
							</p>
							<a id="ctl00_content_13_InnerCarousel_SlidesRepeater_ctl00_standardSlide_carouselContentControl_ButtonLink" class="ButtonLight blue" onclick="dyson.tracking.trackCarouselAction(&#39;carouselcarousel7&#39;,&#39;gb_jansale_2015_hmc_panel&#39;)" href="http://www.dyson.co.uk/january-sale.aspx">Shop Dyson sale</a>
						</div>
						<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
							style="left: px; top: px;">
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
					    var slidercarouselCarousel7 = $('#carouselCarousel7').royalSlider({
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
					        arrowsNav: false,            
					        sliderTouch: false,
					        sliderDrag: false,
					        autoPlay: {
					            enabled: false,
					            pauseOnHover: true,
					            delay: 5000
					        }
					    }).data('royalSlider');
					    
					    jQuery('#carouselCarousel7 .rsArrowLeft').hide();
					    jQuery('#carouselCarousel7 .rsArrowRight').show();
					    
					    if (1 == 1) {
					        jQuery('#carouselCarousel7 .rsArrowRight').hide();
					    }
					
					    // push the slider into a collection
					    dyson.storage.sliders.push(slidercarouselCarousel7);
					    var collectionIndex = dyson.storage.sliders.length - 1;
					
					    // set up the video slides, if they exist
					    dyson.video.videoSlideSetup(slidercarouselCarousel7, collectionIndex);
					
					    slidercarouselCarousel7.ev.on('rsBeforeMove', function (event, type, userAction) {
					         
					        // User initiated slide change (not autoplay)
					        if ( userAction ) {
					            var slideId = slidercarouselCarousel7.currSlideId;
					            if (type == 'next') {
					                slideId++;
					            } else if (type == 'prev') {
					                slideId--;
					            } else {
					                slideId = type;   
					            }
					            
					            var slidename = slidercarouselCarousel7.slides[slideId].content.attr('data-trackingname');
					            dyson.tracking.trackCarouselSlideChange('carouselCarousel7', slidename);
					        }                             
					    });
					
					    slidercarouselCarousel7.ev.on('rsAfterSlideChange', function(event) {
					
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
					            var index = slidercarouselCarousel7.currSlideId;
					            index++;
					            var categoryThumbClasss = ".category_thumb" + index;
					            $(categoryThumbClasss).trigger('click');
					        }
					        
					        if (slidercarouselCarousel7.currSlideId == (1 - 1)) {
					            jQuery('#carouselCarousel7 .rsArrowRight').hide();
					        } else {
					             jQuery('#carouselCarousel7 .rsArrowRight').show();
					        }
					        if (slidercarouselCarousel7.currSlideId == 0) {
					            jQuery('#carouselCarousel7 .rsArrowLeft').hide();
					        } else {
					             jQuery('#carouselCarousel7 .rsArrowLeft').show();
					        }
					        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
					    });
					
					    if ("None" === "Light") {
					        jQuery("#carouselCarousel7 .rsArrowIcn").addClass("greyImage");
					
					    }
					})();   
				</script>