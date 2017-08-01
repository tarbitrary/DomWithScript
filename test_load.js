function eventA() {
    alert("hello");
}

function eventB() {
    alert("who are you");
}

addLoadEvent(eventA);
addLoadEvent(eventB);