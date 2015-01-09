<div id="carouselCarousel4" class="lrgSlider rsDefault">
					<div id="ctl00_content_5_InnerCarousel_SlidesRepeater_ctl00_standardSlide_StandardSlideDiv" data-trackingname="dc50_benefit_ridesonaball">
						<img src="/dyson/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Large/DC50_Ball_Benefit_1000x560.ashx.png" alt="DC50 turning corners" width="1000" height="560" />
						<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
							data-move-effect="left" data-move-offset="20px" style="left: 80px; top: 110px;
							width: 340px; z-index: 1">
							<h2 style="color: #000000!important;"  >
								Rides on a ball – steers easily into difficult places
							</h2>
							<p style="color: #000000">
								No more awkward moves – DC50 can be steered with a turn of the wrist. And it’s streamlined for cleaning in difficult places.
							</p>
						</div>
						<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
							style="left: px; top: px;">
						</div>
					</div>
					<div id="animationDC50_Tech_BallTech" class="animation" data-trackingname="dc50_tech_balltech">
						<div class="lrgSlider" style="background: url('/medialibrary/Group/Carousels/SlideBackground/Vacuums/Uprights/DC50/Large/DC50_Ball_Tech_1000x560.ashx.jpeg');
							position: relative;">
							<div class="aniContainer" style="position: absolute; left: 547px; top: 90px; width: 340px;
								height: 380px; background: url('/medialibrary/Group/Carousels/Animation Sprites/UprightBallTechSprite.ashx.png') no-repeat;">
							</div>
							<div class="videoContentOverlay rsABlock slideContentBlock SlideContentLeftAligned  "
								data-move-effect="left" data-move-offset="20px" style="left: 110px; top: 80px;
								width: 340px; z-index: 1">
								<h2 style="color: #FFFFFF!important;"  >
									Ball™ technology – a dynamic turning circle
								</h2>
								<p style="color: #FFFFFF">
									Fixed wheels are not designed to turn corners. But a ball can turn on the spot. As the ball’s axis is titled, its turning circle tightens – allowing full and accurate steering control.<br/><br/>The vacuum’s key components have been engineered to fit inside the ball itself. This gives the machine a streamlined profile, allowing access to tight spaces and lowering its centre of gravity to make it lighter in the hand.<br/><br/>With DC50, even more of the vacuum’s components are located inside the ball, further streamlining DC50’s profile and reducing its overall size.
								</p>
							</div>
							<div class="slideExtraMotif rsABlock slideContentBlock" data-move-effect="left" data-move-offset="20px"
								style="left: px; top: px;">
							</div>
						</div>
					</div>
				</div>
				<script type="text/javascript">(function () {
					var aniSetupObj = function() {
					return new dyson.animation.setup(jQuery('#animationDC50_Tech_BallTech'),
					{ numberOfFrames: 16, frameWidth: -340, frameRate: 20, loop: false });
					};
					dyson.storage.animation.push(aniSetupObj);
					})();(function () {
					var aniSetupObj = function() {
					return new dyson.animation.setup(jQuery('#animationDC50_Tech_BallTech'),
					{ numberOfFrames: 16, frameWidth: -340, frameRate: 20, loop: false });
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
					    var slidercarouselCarousel4 = $('#carouselCarousel4').royalSlider({
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
					    
					    jQuery('#carouselCarousel4 .rsArrowLeft').hide();
					    jQuery('#carouselCarousel4 .rsArrowRight').show();
					    
					    if (2 == 1) {
					        jQuery('#carouselCarousel4 .rsArrowRight').hide();
					    }
					
					    // push the slider into a collection
					    dyson.storage.sliders.push(slidercarouselCarousel4);
					    var collectionIndex = dyson.storage.sliders.length - 1;
					
					    // set up the video slides, if they exist
					    dyson.video.videoSlideSetup(slidercarouselCarousel4, collectionIndex);
					
					    slidercarouselCarousel4.ev.on('rsBeforeMove', function (event, type, userAction) {
					         
					        // User initiated slide change (not autoplay)
					        if ( userAction ) {
					            var slideId = slidercarouselCarousel4.currSlideId;
					            if (type == 'next') {
					                slideId++;
					            } else if (type == 'prev') {
					                slideId--;
					            } else {
					                slideId = type;   
					            }
					            
					            var slidename = slidercarouselCarousel4.slides[slideId].content.attr('data-trackingname');
					            dyson.tracking.trackCarouselSlideChange('carouselCarousel4', slidename);
					        }                             
					    });
					
					    slidercarouselCarousel4.ev.on('rsAfterSlideChange', function(event) {
					
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
					            var index = slidercarouselCarousel4.currSlideId;
					            index++;
					            var categoryThumbClasss = ".category_thumb" + index;
					            $(categoryThumbClasss).trigger('click');
					        }
					        
					        if (slidercarouselCarousel4.currSlideId == (2 - 1)) {
					            jQuery('#carouselCarousel4 .rsArrowRight').hide();
					        } else {
					             jQuery('#carouselCarousel4 .rsArrowRight').show();
					        }
					        if (slidercarouselCarousel4.currSlideId == 0) {
					            jQuery('#carouselCarousel4 .rsArrowLeft').hide();
					        } else {
					             jQuery('#carouselCarousel4 .rsArrowLeft').show();
					        }
					        jQuery(".videoSlide").parent(".rsSlide").css('overflow','visible');
					    });
					
					    if ("Normal" === "Light") {
					        jQuery("#carouselCarousel4 .rsArrowIcn").addClass("greyImage");
					
					    }
					})();   
				</script>