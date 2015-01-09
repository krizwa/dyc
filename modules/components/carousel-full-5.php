<div id="carouselCarousel5" class="medSlider rsDefault">
					<div id="ctl00_content_7_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="dc50_benefit_removeshairwithouttangling">
						<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Medium/DC50_TangleFreeTool_1000x410.ashx.jpeg" alt="Tangle-free turbine tool" width="1000" height="410" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
							data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 110px;
							width: 340px; z-index: 1">
							<h2 style="color: #000000!important;"  >
								Removes hair without the tangling
							</h2>
							<p style="color: #000000">
								DC50 Animal comes with the Tangle-free Turbine tool, so you can remove dirt and hair from confined spaces and uneven surfaces – without it tangling around a brush bar.
							</p>
						</div>
						<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
							style="left: px; top: px;">
						</div>
					</div>
					<div id="ctl00_content_7_InnerCarousel_SlidesRepeater_ctl01_standardSlide_StandardSlideDiv" data-trackingname="tft_tech_counterrotatingheads">
						<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Accessories/Medium/TangleFreeTool_Tech_1000x410.ashx.png" alt="Tangle free turbine close up" width="1000" height="410" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
							data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 70px;
							width: 360px; z-index: 1">
							<h2 style="color: #FFFFFF!important;"  >
								Counter-rotating heads
							</h2>
							<p style="color: #FFFFFF">
								When hair wraps around the brush bars of conventional turbine tools, it slows them down or stops them working. Untangling has to be done manually – a messy and unhygienic job.<br/><br/>The Tangle-free Turbine tool uses counter-rotating heads with brushes to remove hair and dirt. Because the heads spin in opposing directions, hair doesn’t tangle as it’s picked up – it goes straight into the vacuum, and into the bin.
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
					    var slidercarouselCarousel5 = $('#carouselCarousel5').royalSlider({
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
					        sliderTouch: true,
					        sliderDrag: true,
					        autoPlay: {
					            enabled: false,
					            pauseOnHover: true,
					            delay: 5000
					        }
					    }).data('royalSlider');
					    
					    jQuery('#carouselCarousel5 .rsArrowLeft').hide();
					    jQuery('#carouselCarousel5 .rsArrowRight').show();
					    
					    if (2 == 1) {
					        jQuery('#carouselCarousel5 .rsArrowRight').hide();
					    }
					
					    // push the slider into a collection
					    dyson.storage.sliders.push(slidercarouselCarousel5);
					    var collectionIndex = dyson.storage.sliders.length - 1;
					
					    // set up the video slides, if they exist
					    dyson.video.videoSlideSetup(slidercarouselCarousel5, collectionIndex);
					
					    slidercarouselCarousel5.ev.on('rsBeforeMove', function (event, type, userAction) {
					         
					        // User initiated slide change (not autoplay)
					        if ( userAction ) {
					            var slideId = slidercarouselCarousel5.currSlideId;
					            if (type == 'next') {
					                slideId++;
					            } else if (type == 'prev') {
					                slideId--;
					            } else {
					                slideId = type;   
					            }
					            
					            var slidename = slidercarouselCarousel5.slides[slideId].content.attr('data-trackingname');
					            dyson.tracking.trackCarouselSlideChange('carouselCarousel5', slidename);
					        }                             
					    });
					
					    slidercarouselCarousel5.ev.on('rsAfterSlideChange', function(event) {
					
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
					            var index = slidercarouselCarousel5.currSlideId;
					            index++;
					            var categoryThumbClasss = ".category_thumb" + index;
					            $(categoryThumbClasss).trigger('click');
					        }
					        
					        if (slidercarouselCarousel5.currSlideId == (2 - 1)) {
					            jQuery('#carouselCarousel5 .rsArrowRight').hide();
					        } else {
					             jQuery('#carouselCarousel5 .rsArrowRight').show();
					        }
					        if (slidercarouselCarousel5.currSlideId == 0) {
					            jQuery('#carouselCarousel5 .rsArrowLeft').hide();
					        } else {
					             jQuery('#carouselCarousel5 .rsArrowLeft').show();
					        }
					        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
					    });
					
					    if ("Normal" === "Light") {
					        jQuery("#carouselCarousel5 .rsArrowIcn").addClass("greyImage");
					
					    }
					})();   
				</script>