particlesJS.load('header', 'assets/particles.json');
$(function () {
    $("#usage").typed({
        strings: [
            "var arr = [1,2,3,4];<br>arr.typeis();",
            "var regex = /test/gi;<br>regex.typeis('regex');",
            "function <b>realWorld</b>( options ){<br> &emsp;if(options.typeis('object')){<br> &emsp;&emsp;//do something <br> &emsp;} else {<br> &emsp;&emsp;//do another something<br> &emsp;}<br> }"
        ],
        typeSpeed: 50,
        startDelay: 50,
        backDelay: 1500,
        loop: true
    });
    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block);
    });
});