<!DOCTYPE html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html id="ctl00_htmlTag" class="no-js" lang="en-GB">
<!--<![endif]-->

<head>
    <?php include("modules/common/head-meta.php"); ?>
    <?php include("modules/common/head-styles.php"); ?>
    <?php include("modules/common/head-scripts.php"); ?>
</head>

<body>
    <?php include("modules/common/external-google-tag-manager.php"); ?>

    <form method="post" action="/" id="aspnetForm">
        
        <?php include("modules/common/cookies-banner.php"); ?>

        <div class="wrapper_main">
            
            <?php include("modules/common/header.php"); ?>
            
            <div class="wrapper_content">
                <?php include("modules/components/carousel-full.php"); ?>
                <?php include("modules/components/list-items.php"); ?>
            </div>

            <?php include("modules/common/footer.php"); ?>
        </div>

    </form>
    <?php include("modules/common/footer-scripts.php"); ?>
</body>

</html>