;(function($){
    $(document).ready(function(){
        //start-canvas-manu js
        $(".manu-canvas").on("click", function(){
            $(".canvas-manu,.canvas-overlay").addClass("active");
        })
        $(".fa-times,.canvas-overlay").on("click", function(){
            $(".canvas-manu,.canvas-overlay").removeClass("active");
        })
        //end-canvas-manu js
        
        
        // start search bar js
        $(".search-icon").on("click", function(){
            $(".click-submit,.canvas-overlay2").addClass("active");
        })
        $(".canvas-overlay2").on("click", function(){
            $(".click-submit,.canvas-overlay2").removeClass("active");
        })
		// end search bar js
    });
})(jQuery);