var headerHeight = document.querySelector('.nav').clientHeight;
var winHeight = window.innerHeight;

var iframeHeight = winHeight-parseInt(headerHeight);
document.querySelector('#post').height = iframeHeight;

if (location.href.includes('?name=')) {
    var postPath = "https://arc-animal-rescue.github.io/arcanimalrescue.com/blog/"+location.href.split('?name=')[1]+".html";

    document.querySelector('#post').src=postPath;
} else {
    document.write('Resource not found.')
}
