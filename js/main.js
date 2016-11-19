function loadIframes() {
    var deferredIframes = document.getElementsByTagName('iframe');

    for (var i = 0; i < deferredIframes.length; i++) {
        if (deferredIframes[i].getAttribute('data-src')) {
            deferredIframes[i].setAttribute('src', deferredIframes[i].getAttribute('data-src'));
        }
    }
}

window.onload = loadIframes();
