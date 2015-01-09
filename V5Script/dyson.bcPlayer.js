// Dyson video related JS.
dyson.video = {
    /*
    These are handlers bound in the templateReady function.
    */

    // Brightcove carousel player
    BcpCarousel: function (jqElem) {

        // required as Brightcove don't respect context.
        // using var effectively makes this private, and will 
        // be captured via closure as it's referenced all 
        // over the constructor.
        var self = this;

        // flags
        self.templateReady = false;
        self.templateRequired = false;
        self.templatePlaying = false;
        self.paused = false;
        self.videoComplete = false;

        self.jqElem = jqElem;

        /*
        These two handlers are referenced by 
        the Brightcove player object parameters
        */
        self.onTemplateLoad = function (experienceId) {
            // get the reference to the experience and the api modules
            self.player = brightcove.api.getExperience(experienceId);
            self.APIModules = brightcove.api.modules.APIModules;
            // need the close captions event
            self.captionsEvent = brightcove.api.events.CaptionsEvent;
            // need the media event module for the play/pause hack
            self.mediaEvent = brightcove.api.events.MediaEvent;
            self.experienceModule = self.player.getModule(self.APIModules.EXPERIENCE);
        };

        self.onTemplateReady = function (evt) {
            // get a reference to the video player
            self.videoPlayer = self.player.getModule(self.APIModules.VIDEO_PLAYER);
            // get the reference to the captions module
            self.captionsModule = self.player.getModule(self.APIModules.CAPTIONS);
            // mark the template as good to go
            self.templateReady = true;
            // play it - rely on the progress handler to pause it!
            self.videoPlayer.play();
            self.videoPlayer.addEventListener(self.mediaEvent.PROGRESS, self.onProgress);
            // if the template is marked as required, play the video
            if (self.templateRequired) {
                self.playMe();
            }

            // if video is in active slide (i.e. first slide), set a waypoint to play the video
            if (self.jqElem.parent().hasClass("rsActiveSlide")) {
                self.jqElem.parent().waypoint(function() {
                    self.playMe();
                }, { offset: 'bottom-in-view', triggerOnce: true }
	            );
            }
        };

        // this is another handler, for the progress event.
        self.onProgress = function (evt) {
            // hide the overlay static fallback, this shouldn't be run each time
            // refactor this so it's only done once!
            self.jqElem.find('.videoFallback').hide();

            // if the video is playing, wait until it's about to finish 
            // and then FREEZE
            if (self.templatePlaying) {
                if (evt.duration - evt.position < 0.3) {
                    self.videoPlayer.pause(true);
                    self.paused = true;
                    self.videoPlayer.removeEventListener(self.mediaEvent.PROGRESS, self.onProgress);
                    self.videoComplete = true;
                }
                return;
            }
            // if the video is not required, and it's not already paused, 
            // allow it to start playing and pause as quickly as possible.
            if (!self.paused && !self.templateRequired) {
                if (evt.position > 0.01) {
                    self.videoPlayer.pause(true);
                    self.paused = true;
                }
            }
        };

        // this is the play function, with some checks.
        self.playMe = function () {
            if (self.videoComplete) {
                return;
            }
            // check the template is ready before attempting to play the video
            if (self.templateReady) {
                self.videoPlayer.play();
                // mark the template as no longer required
                self.templateRequired = false;
                self.templatePlaying = true;
            } else {
                // if the template isn't ready, mark it as required
                // this will get picked up by the onTemplateReady handler.
                self.templateRequired = true;
            }
        };
    },

    // Config for the video 
    videoSlideSetup: function (slider, collectionIndex) {
        if (slider === null) {
            return;
        }
        // get a reference to the video slide, and the overlay content
        jQuery(slider.slidesJQ).each(function () {
            jQuery(this).find('.videoSlide').each(function () {
                // grab the video overlay content, and the video fallback content
                var videoContent = $(this).find('.videoContent');
                // work out the offset
                var vidSlideOffset = $(this).parent().css("left");
                // move the overlay content so it's on top of the relevant video slide
                jQuery(videoContent).css("left", vidSlideOffset);
                jQuery(videoContent).attr('class', 'videoLayer');
                // move it to become a sibling, not a child
                jQuery(this).parent().after(videoContent);
            });
        });

        // event handler for slide change
        slider.ev.on('rsAfterSlideChange', function (e, slideObject) {

            var currSlide = jQuery(e.currentTarget.currSlide.content);
            var playerLocation = currSlide.data("cIndex");
            // video
            if (currSlide.hasClass("videoSlide")) {
                // if the player location (in dyson.storage) can't be determined, exit
                if (playerLocation === null) {
                    return;
                }
                // otherwise, play the video - if it's not ready, the handlers will deal with it.
                var player = dyson.storage.players[playerLocation];
                player.playMe();
                return;
            }

            // animation
            if (currSlide.hasClass("animation")) {
                // if the animation is already running, don't ask it to run again.
                if (!currSlide.data("isRunning")) {
                    currSlide.data().runAnimation();
                }
            }
        });
    }
}

function standardTemplateLoad(experienceId) {
    // get the reference to the experience and the api modules
    self.player = brightcove.api.getExperience(experienceId);
    self.APIModules = brightcove.api.modules.APIModules;
    // need the close captions event
    self.captionsEvent = brightcove.api.events.CaptionsEvent;
    // need the media event module for the play/pause hack
    self.mediaEvent = brightcove.api.events.MediaEvent;
};

function standardTemplateReady(event) {
    var player = brightcove.api.getExperience(event.target.experience.id);
    var videoPlayer = player.getModule(brightcove.api.modules.APIModules.VIDEO_PLAYER);
    var captionsModule = player.getModule(brightcove.api.modules.APIModules.CAPTIONS);
    captionsModule.addEventListener(brightcove.api.events.CaptionsEvent.DFXP_LOAD_SUCCESS, function (evt) { setCaptions(evt, captionsModule, parseInt(event.target.experience.id.substring(3))); });
    captionsModule.addEventListener(brightcove.api.events.CaptionsEvent.DFXP_LOAD_ERROR, loadCaptionError);
    captionsModule.setCaptionsEnabled(true);

    // add listener on progress, being, stop and complete
    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.PLAY, function (evt) { VideoOnProgress(evt, player, videoPlayer); });
    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.BEGIN, VideoOnBegin);
    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.STOP, VideoOnStop);
    videoPlayer.addEventListener(brightcove.api.events.MediaEvent.COMPLETE, VideoOnComplete);
};

function loadCaptionError(evt) {
}

function setCaptions(evt, captionsModule, videoId) {
    // grabs the lang attribute from the HTML tag and strips out the language string
    this.languageId = jQuery('html').attr('lang').split('-')[0];

    var captionSet = captionsModule.getLanguages(videoId,
        function (result) {
            if (result.length == 0) {
                captionsModule.setCaptionsEnabled(false);
            } else {
                if (result.length > 0 && result.indexOf(languageId) > -1) {
                    captionsModule.setLanguage(languageId);
                } else {
                    captionsModule.setCaptionsEnabled(false);
                }
            }
        }
    );
}

function VideoOnProgress(evt, player, videoPlayer) {
    // hide the overlay static fallback, this shouldn't be run each time
    // refactor this so it's only done once!
    player.jqElem.find('.videoFallback').hide();

    // if the video is playing, wait until it's about to finish 
    // and then FREEZE
    if (player.templatePlaying) {
        if (evt.duration - evt.position < 0.3) {
            videoPlayer.pause(true);
            player.paused = true;
            videoPlayer.removeEventListener(brightcove.api.events.MediaEvent.PLAY, VideoOnProgress);
            player.videoComplete = true;
        }
        return;
    }

    // if the video is not required, and it's not already paused, 
    // allow it to start playing and pause as quickly as possible.
    if (player.paused && !player.templateRequired) {
        if (evt.position > 0.01) {
            videoPlayer.pause(true);
            player.paused = true;
        }
    }
};

function VideoOnBegin(evt) {
    // video play has begun, fire GTM event
    dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'play', 'event': 'event' });
};

function VideoOnStop(evt) {
    // video play has stopped, fire GTM event
    dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'stop', 'event': 'event' });
};

function VideoOnComplete(evt) {
    // video play has begun, fire GTM event
    dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'end', 'event': 'event' });
};
