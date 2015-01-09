// Dyson animation JS.
dyson.animation = {

    // animation loop, to be called on page load
    init: function () {
        // loop through references to animation configs
        for (var i = 0; i < dyson.storage.animation.length; i++) {
            // execute them
            dyson.storage.animation[i]();
        }
    },

    // animation setup
    setup: function (jqElemRef, configObj) {

        var self = this;
        // find the inner animation container
        var aniContainer = jqElemRef.find('.aniContainer');
        // create a new config object
        var aniConfig = new dyson.animation.config(jQuery(aniContainer)[0], configObj, jqElemRef);

        // if the animation is located inside a slide, special things need to happen.
        // especially if it is located on the first slide.
        if (jqElemRef.parent().hasClass("rsSlide") && (jqElemRef.parent().prev().length > 0)) {
            aniConfig.onSlider = true;
            jqElemRef.data(aniConfig);

        } else {
            jqElemRef.waypoint(function () {
                aniConfig.runAnimation();
            }, { offset: 'bottom-in-view', triggerOnce: true }
			);
        }
    },

    // configuration for frame-by-frame animations.
    config: function (animationElement, configObj, jqElemRef) {

        // private reference to this, captured via closure.
        var self = this;

        // properties
        self.frameRate = configObj.frameRate;
        self.numberOfFrames = configObj.numberOfFrames;
        self.frameWidth = configObj.frameWidth;
        self.animationElement = animationElement;
        self.frameCounter = 0;
        self.loop = configObj.loop;
        self.hasRun = false;

        // methods
        self.runAnimation = function () {
            jqElemRef.data("isRunning", true);
            if (!self.loop && self.hasRun) {
                return true;
            }
            // first frame - not much to do here.
            if (self.frameCounter === 0) {
                // reset the background position in case the animation is looping
                self.animationElement.style.backgroundPosition = "0px 0px";
                // increment the frame counter ready for the next iteration of the loop
                self.frameCounter++;

                // animation is ongoing
            } else if (self.frameCounter < self.numberOfFrames) {
                // change the background position of the sprite
                self.animationElement.style.backgroundPosition = (self.frameWidth * self.frameCounter) + "px 0px";
                // increment the frame counter
                self.frameCounter++;
            } else {
                // mark the animation as having completed
                self.hasRun = true;
                // reset the frame counter
                self.frameCounter = 0;

                // if the animation is set to loop, do so.
                if (!self.loop) {
                    jqElemRef.data("isRunning", false);
                    return true;
                }

                self.runAnimation();
                return true;
            }

            setTimeout(self.runAnimation, self.frameRate);
            return true;
        };
    }
}