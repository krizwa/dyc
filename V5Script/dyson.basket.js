dyson.basket = {
    loadV5Basket: function (shoppingBasketErrMessage) {
        jQuery('.js_basket embed').attr('style', 'visibility:hidden');
        jQuery('.js_basket object').attr('style', 'visibility:hidden');
        jQuery('#v5basketSummary').html('<div style="background-color: #d5d5d5; top: 57px; height: 165px; widht: 500px"></div>');
        jQuery('#v5basketSummary').show();
        jQuery('#v5basketSummary').load('/Checkout/Basket/Basket-Summary.aspx', function (response, textStatus, xhr) {
            if (textStatus == "success") {
                jQuery('#v5basketSummary > #loading').hide();
                jQuery('#v5basketSummary').find('a[rel="btnSummary_Close"]').click(function () {
                    hideBasketSummary();
                    return false;
                });

                if (jQuery('.total .basketAlignRight').html()) {
                    var basketTotal = jQuery('.total .basketAlignRight').html();
                    var basketItems = 0;
                    jQuery('.basketQty').each(function (index) {
                        basketItems = parseInt(basketItems) + parseInt(jQuery(this).html());
                    });
                    var basketSummary = basketTotal + "(" + basketItems + ")";
                    jQuery('span.basketText').html(basketSummary);

                }
                if (basketSummary) {
                    if (basketSummary.search("basket")) {
                        jQuery('a[rel="v5basketSummary"]').html(basketSummary);
                    } else {
                        jQuery('#v5basketSummary').html("</br> </br> </br> </br> <h3> " + shoppingBasketErrMessage + "</h3>");
                    }
                }
            }

            if (textStatus == "error") {
                jQuery('#v5basketSummary').html("</br> </br> </br> </br> <h3> " + shoppingBasketErrMessage + "</h3>");
            }
        });
    },

    hideBasketSummary: function () {
        jQuery('#v5basketSummary').fadeOut(function () {
            jQuery('.js_basket embed').attr('style', 'visibility:visible');
            jQuery('.js_basket object').attr('style', 'visibility:visible');
        });

        jQuery('#v5basketSummary > #content').html('');
        jQuery('#v5basketSummary > #content').hide();
        jQuery('#v5basketSummary > #loading').show();

    }
}