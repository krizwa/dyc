<!-- LivePYAMS04 -->
<script type="text/javascript">
    brightcove.createExperiences();
    dyson.animation.init();
</script>


<script type="text/javascript">
    jQuery('.clearable').clearSearch();
    
    var searchUrl = '';
    
    function magentoSearch() {
    
        if (jQuery('.magento-search').val() != '') {
            window.location.href = searchUrl + '?q=' + htmlEncode(jQuery('.magento-search').val());
        }
    }
    
    function htmlEncode(value) {
        return jQuery('<div/>').text(value).html();
    }
</script>