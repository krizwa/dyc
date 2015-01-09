
dyson.tracking = {
    /*
    General tracking
    */
    trackHeaderLink: function (label) {
        dataLayer.push({ 'category': 'header', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackFooterLink: function (label) {
        dataLayer.push({ 'category': 'footer', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackContentItemLink: function (label) {
        dataLayer.push({ 'category': 'content', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackExternalLink: function (label) {
        dataLayer.push({ 'category': 'external_link', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackCarouselAction: function (carouselname, label) {
        dataLayer.push({ 'category': carouselname.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackCarouselVideoAction: function (carouselname, label) {
        dataLayer.push({ 'category': carouselname.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click_video', 'event': 'event' });
    },

    trackCarouselTermsAction: function (carouselname, label) {
        dataLayer.push({ 'category': carouselname.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click_video', 'event': 'event' });
    },

    trackCarouselLightbulbAction: function (carouselname, label) {
        dataLayer.push({ 'category': carouselname.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click_lightbulb', 'event': 'event' });
    },

    trackCarouselSlideChange: function (carouselname, label) {
        dataLayer.push({ 'category': carouselname.toLowerCase(), 'label': label.toLowerCase(), 'action': 'show_slide', 'event': 'event' });
    },

    trackSubcategoryClick: function (label) {
        dataLayer.push({ 'category': 'subcategory', 'label': label.toLowerCase(), 'action': 'show_slide', 'event': 'event' });
    },

    trackProductSliderAction: function (label) {
        dataLayer.push({ 'category': 'product_slider', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackWhereToBuySearch: function (label) {
        dataLayer.push({ 'category': 'wheretobuy', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackLegacyMobileEvent: function (category, label, action) {
        dataLayer.push({ 'category': category.toLowerCase(), 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },

    trackInformationLink: function (label) {
        dataLayer.push({ 'category': 'information_link', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackSerialNumberEvent: function (category, label, action) {
        dataLayer.push({ 'category': category.toLowerCase(), 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },
    
    trackOrderFailedEvent: function (label) {
        dataLayer.push({ 'category': 'form_checkout', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    
    trackOrderConfEvent: function (label, action) {
        dataLayer.push({ 'category': 'form_checkout', 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },
    
    trackBasketEvent: function (label, action) {
        dataLayer.push({ 'category': 'basket_page', 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },
    
    trackPersistentBasketEvent: function (label, action) {
        dataLayer.push({ 'category': 'persistent_basket', 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },

    trackRangeDropDrown: function (label) {
        dataLayer.push({ 'category': 'range_dropdown', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackReadMoreProductFeaturesEvent: function (label) {
        dataLayer.push({ 'category': 'product_features_link', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackCategoryTabEvent: function (label) {
        dataLayer.push({ 'category': 'category_tabs', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackVideoProductFeaturesEvent: function (label) {
        dataLayer.push({ 'category': 'product_features_video', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackSpecificationLink: function (label) {
        dataLayer.push({ 'category': 'specification', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    
    trackUsefulLinkDropDown: function (label) {
        dataLayer.push({ 'category': 'useful_link', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackQuickNavigation: function (label) {
        dataLayer.push({ 'category': 'page_navigation', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackProductDetails: function (label) {
        dataLayer.push({ 'category': 'product_details', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackInTheBoxVideo: function (label) {
        dataLayer.push({ 'category': 'in_the_box_video', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackInTheBoxPanel: function (label) {
        dataLayer.push({ 'category': 'in_the_box', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackGalleryLightboxEvent: function (label) {
        dataLayer.push({ 'category': 'gallery_lightbox', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackAddToBasketLink: function (category, label) {
        dataLayer.push({ 'category': category.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackShopWithConfidence: function (label) {
        dataLayer.push({ 'category': 'shop_with_confidence', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackHollywoodReviewClick: function (label) {
        dataLayer.push({ 'category': 'hollywood_review', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackReviewsPageTab: function (label) {
        dataLayer.push({ 'category': 'reviews_tab', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackReviewsClick: function (label) {
        dataLayer.push({ 'category': 'reviews', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackBrowsePageLink: function (category, label) {
        dataLayer.push({ 'category': category.toLowerCase(), 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackBrowseSort: function (label) {
        dataLayer.push({ 'category': 'browse_sort', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackBrowseFilter: function (label) {
        dataLayer.push({ 'category': 'browse_filter', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackBrowseSubCategory: function (label) {
        dataLayer.push({ 'category': 'browse_subcategory', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackFeaturedProduct: function (label) {
        dataLayer.push({ 'category': 'featured_product', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    
    trackBrowseToolsRange: function (label) {
        dataLayer.push({ 'category': 'browse_tools_range', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackBrowsToolsSerial: function (label) {
        dataLayer.push({ 'category': 'browse_tools_serial', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },

    trackFindRetailerSearchEvent: function (label) {
        dataLayer.push({ 'category': 'find_retailer', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    trackFindRetailerSort: function (label) {
        dataLayer.push({ 'category': 'find_retailer_sort', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    trackFindRetailerUrl: function (type, url) {
        dataLayer.push({ 'category': 'find_retailer_link_' + type, 'label': url.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    trackFindRetailerUseMyLocation: function () {
        dataLayer.push({ 'category': 'find_retailer_geolocation', 'label': 'use_my_location', 'action': 'click', 'event': 'event' });
    },
    trackSplitPanelCarousel: function (label) {
        dataLayer.push({ 'category': 'split_panel', 'label': label.toLowerCase(), 'action': 'click', 'event': 'event' });
    },
    trackBackToTop: function () {
        dataLayer.push({ 'category': 'back_to_top', 'label': 'back_to_top', 'action': 'click', 'event': 'event' });
    },
    trackDysonEvent: function (category, label, action) {
        dataLayer.push({ 'category': category.toLowerCase(), 'label': label.toLowerCase(), 'action': action.toLowerCase(), 'event': 'event' });
    },
	trackToolSelectorVideo: function(label) {
        dataLayer.push({'category': 'accessory_selector_video', 'label': label.toLowerCase(), 'action': 'click_video', 'event': 'event'});
    },
    /*
    Brightcove tracking
    Maybe pass in video ID from Sitecore
    */
    BCP: function () {
        // required as Brightcove don't respect context.
        // using var effectively makes this private, and will 
        // be captured via closure as it's referenced all 
        // over the constructor.
        var self = this;

        /*
        These two handlers are referenced by 
        the Brightcove player object parameters
        */
        self.onTemplateLoad = function (experienceID) {
            // get the reference to the experience and the api modules
            self.player = brightcove.api.getExperience(experienceID);
            self.APIModules = brightcove.api.modules.APIModules;
            // need the media event module for play/pause
            self.mediaEvent = brightcove.api.events.MediaEvent;
        };

        self.onTemplateReady = function (evt) {
            // get a reference to the video player
            self.videoPlayer = self.player.getModule(self.APIModules.VIDEO_PLAYER);
            self.videoPlayer.addEventListener(self.mediaEvent.PROGRESS, self.onProgress);
            self.videoPlayer.addEventListener(self.mediaEvent.BEGIN, self.onBegin);
            self.videoPlayer.addEventListener(self.mediaEvent.STOP, self.onStop);
            self.videoPlayer.addEventListener(self.mediaEvent.COMPLETE, self.onComplete);
        };

        /*
        These are handlers bound in the templateReady function.
        */
        self.onBegin = function (evt) {
            // video play has begun, fire GTM event
            dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'play', 'event': 'event' });
        };

        self.onStop = function (evt) {
            // video play has stopped, fire GTM event
            dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'stop', 'event': 'event' });
        };

        self.onComplete = function (evt) {
            // video play has begun, fire GTM event
            dataLayer.push({ 'category': 'video', 'label': evt.media.displayName, 'action': 'end', 'event': 'event' });
        };
    }
}