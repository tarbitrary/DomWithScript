function addLoadEvent(func) {
    var oldEvent = window.onload;

    if (typeof  window.onload !== 'function' ) {
        window.onload = func;
    }else {
        window.onload = function () {
            oldEvent();
            func();
        }
    }
}

function insertAfter(element, targetElement) {
    var parentNode = targetElement.parentNode;
    if (parentNode.lastChild == targetElement) {
        parentNode.appendChild(element);
    } else {
        parentNode.insertBefore(element, targetElement.nextSibling);
    }
}