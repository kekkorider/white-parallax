(function() {

    var viewportTop, 
        windowHeight, 
        viewportBottom, 
        body = document.body,
        html = document.documentElement, 
        height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight ); // <3 http://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript <3
        parallaxStuff = document.querySelectorAll('[data-parallax="true"]'), 
        parallaxLength = parallaxStuff.length;

    function scrollEvent() {

        viewportTop = window.scrollY;
        windowHeight = window.innerHeight;
        viewportBottom = windowHeight + viewportTop;

        /*
        $('[data-parallax="true"]').each(function(){
            distance = viewportTop * $(this).attr('data-speed');
            if($(this).attr('data-direction') === 'up'){ sym = '-'; } else { sym = ''; }
            $(this).css('transform','translate3d(0, ' + sym + distance +'px,0)');
        });
        */

    }

    function draw() {
        requestAnimationFrame(draw);
        scrollEvent();
    }

    draw();

})();
