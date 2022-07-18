function cycleImages() {
    var $active = $("#background_cycler .active");
    var $next =
        $("#background_cycler .active").next().length > 0
            ? $("#background_cycler .active").next()
            : $("#background_cycler .img:first");
    $next.css({
        "z-index": 2,
        "background-size": "cover",
        "background-position": "center center"
    }); //move the next image up the pile
    $active.fadeOut(1000, function() {
        //fade out the top image
        $active
            .css({
                "z-index": 1,
                "background-size": "cover",
                "background-position": "center center"
            })
            .show()
            .removeClass("active"); //reset the z-index and unhide the image
        $next
            .css({
                "z-index": 3,
                "background-size": "cover",
                "background-position": "center center"
            })
            .addClass("active"); //make the next image the top one
    });
}

// Перенес в common.js из-за ошибки
// // $(window).load(function(){
// $(document).ready(function() {
//   $('#background_cycler').fadeIn(1000);//fade the background back in once all the images are loaded
//   // run every 5s
//   setInterval('cycleImages()', 5000);
// })
