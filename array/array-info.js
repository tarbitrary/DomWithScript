var arr = new Array();
arr.push('hello');
arr.push(1);
alert(arr[1]);

var arr = new Array(3, 4, 5, 'test', 'hah', true);
arr.forEach(function () {
    alert('hello')
});
arr.forEach(function (t) {
    alert(t);
})
arr.forEach(function (t, number) {
    alert(t + "->" +number);
});

arr.forEach(function (t, number, ts) {
   alert(t + '->' + number + "->" ts);
});
t.indexOf(2);