var btn = document.querySelector('#head button');
var ul = document.querySelector('#head ul');




var display = true;
btn.onclick = function () {
    // if(display){
    //     ul.style.height = '250px'
    //     display = false
    // }else{
    //     ul.style.height = '0px'
    //     display = true
    // }

    ul.style.height = display ? '250px' : '0px';
    display = !display;
}   


var pic = document.getElementById('pic');
var picUl = document.querySelector('#pic ul');
var picLis = picUl.children;
var cn = 0;
// 无缝轮播图需要四张照片，现在复制一张进行插入进入
var head = picUl.firstElementChild.cloneNode(true);
picUl.appendChild(head);
picUl.style.width = picLis.length * 100 + 'vw';

function move() {
    picUl.style.transition = 'left .5s';
    picUl.style.left = -cn * 100 + 'vw';
}

//  当进行切换到别的页面的时候(未激活窗口)，浏览器为了进行节省资源，将会进行停止这个事件的触发
picUl.addEventListener('transitionend', function () {
    //图片已经走到最后一张了，这时候要让ul回到0才能接上
    if (cn == picLis.length - 1) {
        picUl.style.left = 0;
        picUl.style.transition = '';
        cn = 0;
    }
});


function autoPlay() {
    cn++;

    //这个条件是为了防止页面失去焦点的时候定时还在走，cn也在加，那就会超出范围
    if (cn > picLis.length - 1) {
        cn = 0;
    }
    move();
}

var timer = setInterval(autoPlay,2000)

pic.onmouseenter = function () {
    clearInterval(timer);
    timer = null;
}
pic.onmouseleave = function () {
    timer = setInterval(autoPlay, 2000);
}
