<div id="carouselCarousel2" class="lrgSlider rsDefault">
					<div id="animationDC50_Benefit_CapturesMoreDust" class="animation" data-trackingname="dc50_benefit_capturesmoredust">
						<div class="lrgSlider" style="background: url('/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Large/DC50_Cyclone_Benefit_1000x560.ashx.jpeg');
							position: relative;">
							<div class="aniContainer" style="position: absolute; left: 560px; top: 270px; width: 320px;
								height: 290px; background: url('/dyson/medialibrary/Group/Carousels/Animation Sprites/DC5 sprites.ashx.png') no-repeat;">
							</div>
							<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
								data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 150px;
								width: 340px; z-index: 1">
								<h2 style="color: #000000!important;"  >
									Captures even more microscopic dust
								</h2>
								<p style="color: #000000">
									With two tiers of smaller cyclones, DC50 captures more microscopic dust in the bin.
								</p>
							</div>
							<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
								style="left: px; top: px;">
							</div>
						</div>
					</div>
					<div id="ctl00_content_2_InnerCarousel_SlidesRepeater_ctl01_standardSlide_StandardSlideDiv" data-trackingname="dc50_tech_2tierradialcyclones">
						<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Large/DC50_Cyclone_Tech_1000x560.ashx.jpeg" alt="DC50 2 tier cyclones" width="1000" height="560" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
							data-move-effect="left" data-move-offset="20px" style="left: 580px; top: 160px;
							width: 340px; z-index: 1">
							<h2 style="color: #FFFFFF!important;"  >
								2 Tier Radial™ cyclones
							</h2>
							<p style="color: #FFFFFF">
								Smaller cyclones generate higher centrifugal forces, so they capture more microscopic dust – the dust that contains allergens and bacteria.<br/><br/>In DC50, 19 cyclones work in parallel across two tiers, creating both high centrifugal forces and high airflow. With gravimetric efficiencies of over 99%, they capture more microscopic dust than any other cyclones.
							</p>
						</div>
						<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
							style="left: px; top: px;">
						</div>
					</div>
				</div>


				<script type="text/javascript">(function () {
					var aniSetupObj = function() {
					return new dyson.animation.setup(jQuery('#animationDC50_Benefit_CapturesMoreDust'),
					{ numberOfFrames: 20, frameWidth: -320, frameRate: 100, loop: true });
					};
					dyson.storage.animation.push(aniSetupObj);
					})();(function () {
					var aniSetupObj = function() {
					return new dyson.animation.setup(jQuery('#animationDC50_Benefit_CapturesMoreDust'),
					{ numberOfFrames: 20, frameWidth: -320, frameRate: 100, loop: true });
					};
					dyson.storage.animation.push(aniSetupObj);
					})();
				</script>
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
					    var slidercarouselCarousel2 = $('#carouselCarousel2').royalSlider({
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
					    
					    jQuery('#carouselCarousel2 .rsArrowLeft').hide();
					    jQuery('#carouselCarousel2 .rsArrowRight').show();
					    
					    if (2 == 1) {
					        jQuery('#carouselCarousel2 .rsArrowRight').hide();
					    }
					
					    // push the slider into a collection
					    dyson.storage.sliders.push(slidercarouselCarousel2);
					    var collectionIndex = dyson.storage.sliders.length - 1;
					
					    // set up the video slides, if they exist
					    dyson.video.videoSlideSetup(slidercarouselCarousel2, collectionIndex);
					
					    slidercarouselCarousel2.ev.on('rsBeforeMove', function (event, type, userAction) {
					         
					        // User initiated slide change (not autoplay)
					        if ( userAction ) {
					            var slideId = slidercarouselCarousel2.currSlideId;
					            if (type == 'next') {
					                slideId++;
					            } else if (type == 'prev') {
					                slideId--;
					            } else {
					                slideId = type;   
					            }
					            
					            var slidename = slidercarouselCarousel2.slides[slideId].content.attr('data-trackingname');
					            dyson.tracking.trackCarouselSlideChange('carouselCarousel2', slidename);
					        }                             
					    });
					
					    slidercarouselCarousel2.ev.on('rsAfterSlideChange', function(event) {
					
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
					            var index = slidercarouselCarousel2.currSlideId;
					            index++;
					            var categoryThumbClasss = ".category_thumb" + index;
					            $(categoryThumbClasss).trigger('click');
					        }
					        
					        if (slidercarouselCarousel2.currSlideId == (2 - 1)) {
					            jQuery('#carouselCarousel2 .rsArrowRight').hide();
					        } else {
					             jQuery('#carouselCarousel2 .rsArrowRight').show();
					        }
					        if (slidercarouselCarousel2.currSlideId == 0) {
					            jQuery('#carouselCarousel2 .rsArrowLeft').hide();
					        } else {
					             jQuery('#carouselCarousel2 .rsArrowLeft').show();
					        }
					        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
					    });
					
					    if ("Normal" === "Light") {
					        jQuery("#carouselCarousel2 .rsArrowIcn").addClass("greyImage");
					
					    }
					})();   
				</script>
