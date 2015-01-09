<div id="carouselCarousel8" class="medSlider rsDefault">
					<div id="ctl00_content_4_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="dc50_benefit_lightandcompact">
						<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Medium/DC50_Lightweight_1000x410.ashx.jpeg" alt="DC50 Stairs" width="1000" height="410" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
							data-move-effect="left" data-move-offset="20px" style="left: 580px; top: 80px;
							width: 330px; z-index: 1">
							<h2 style="color: #000000!important;"  >
								Light and compact
							</h2>
							<p style="color: #000000">
								DC50 is Dyson’s smallest upright vacuum cleaner, so it’s light to carry and can be stored in small spaces. Despite its small size, it has the performance of a full-size machine. The technology inside has not simply been ‘shrunk’, but concentrated – every angle and dimension re-engineered.
							</p>
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
					    var slidercarouselCarousel8 = $('#carouselCarousel8').royalSlider({
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
					    
					    jQuery('#carouselCarousel8 .rsArrowLeft').hide();
					    jQuery('#carouselCarousel8 .rsArrowRight').show();
					    
					    if (1 == 1) {
					        jQuery('#carouselCarousel8 .rsArrowRight').hide();
					    }
					
					    // push the slider into a collection
					    dyson.storage.sliders.push(slidercarouselCarousel8);
					    var collectionIndex = dyson.storage.sliders.length - 1;
					
					    // set up the video slides, if they exist
					    dyson.video.videoSlideSetup(slidercarouselCarousel8, collectionIndex);
					
					    slidercarouselCarousel8.ev.on('rsBeforeMove', function (event, type, userAction) {
					         
					        // User initiated slide change (not autoplay)
					        if ( userAction ) {
					            var slideId = slidercarouselCarousel8.currSlideId;
					            if (type == 'next') {
					                slideId++;
					            } else if (type == 'prev') {
					                slideId--;
					            } else {
					                slideId = type;   
					            }
					            
					            var slidename = slidercarouselCarousel8.slides[slideId].content.attr('data-trackingname');
					            dyson.tracking.trackCarouselSlideChange('carouselCarousel8', slidename);
					        }                             
					    });
					
					    slidercarouselCarousel8.ev.on('rsAfterSlideChange', function(event) {
					
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
					            var index = slidercarouselCarousel8.currSlideId;
					            index++;
					            var categoryThumbClasss = ".category_thumb" + index;
					            $(categoryThumbClasss).trigger('click');
					        }
					        
					        if (slidercarouselCarousel8.currSlideId == (1 - 1)) {
					            jQuery('#carouselCarousel8 .rsArrowRight').hide();
					        } else {
					             jQuery('#carouselCarousel8 .rsArrowRight').show();
					        }
					        if (slidercarouselCarousel8.currSlideId == 0) {
					            jQuery('#carouselCarousel8 .rsArrowLeft').hide();
					        } else {
					             jQuery('#carouselCarousel8 .rsArrowLeft').show();
					        }
					        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
					    });
					
					    if ("None" === "Light") {
					        jQuery("#carouselCarousel8 .rsArrowIcn").addClass("greyImage");
					
					    }
					})();   
				</script>