var kolj =  8,
    picwm = "220px",
    delay1 = 50,
    delay2 = 10,
    delay3 = 200,
    delay4 = 20,
    smooth1 = 40,
    smooth2 = 30,
    theDiv = document.getElementById("collage"),
    winw = window.innerWidth,
    winh = window.innerHeight,
    kolw = winw / kolj,
    pics = ["/images/cans/pic01.jpg",
            "/images/cans/pic02.jpg",
            "/images/cans/pic03.jpg",
            "/images/cans/pic04.jpg",
            "/images/cans/pic05.jpg",
            "/images/cans/pic06.jpg",
            "/images/cans/pic07.jpg",
            "/images/cans/pic08.jpg",
            "/images/cans/pic09.jpg",
            "/images/cans/pic10.jpg",
            "/images/cans/pic11.jpg",
            "/images/cans/pic12.jpg",
             "/images/cans/pic13.jpg"];

var coolsound = new Audio("/files/chamberdeco.mp3");

function scramvars() {
    'use strict';
    kolj =  (Math.ceil(18 * Math.random()) + 4);
    delay1 = (((Math.random() * 30) + 10) - kolj);
}

function blush(ujo, burst, opakeco, mainw, mainh) {
    'use strict';
    setTimeout(function () {
        if (opakeco > 1) {
            opakeco = opakeco - (opakeco / smooth2);
            burst.style.opacity = (opakeco / 100);
            mainw = mainw + 1;
            burst.style.width = mainw + 'px';
            mainh = mainh + 2;
            burst.style.height = mainh + 'px';
            blush(ujo, burst, opakeco, mainw, mainh);
        } else {
            ujo.removeChild(burst);
        }
    }, delay4);
}

function finish() {
    'use strict';
    document.getElementById("maintitle").setAttribute('src', "/images/goodcans.gif");
    
    var ujo = document.getElementById("cloud-container"),
        mainw = document.getElementById("maintitle").offsetWidth,
        mainh = document.getElementById("maintitle").offsetHeight,
        burst = document.createElement('img'),
        opakeco = 100;
        
    coolsound.volume = 0.3;
    coolsound.play();
    burst.setAttribute('src', "/images/goodcans.png");
    burst.setAttribute('class', "centered");
    burst.setAttribute('id', "burst");
    burst.style.width = mainw + 'px';
    burst.style.height = mainh + 'px';
    ujo.appendChild(burst);
    //ujo.removeChild(burst);
        
    blush(ujo, burst, opakeco, mainw, mainh);
    
}

//move into place
function slideit(tkol, toptrack) {
    'use strict';
    setTimeout(function () {
        var tkHeight = parseInt(tkol.clientHeight, 10),
            curTop = toptrack,
            aimTop =  parseInt((winh - tkHeight) / 2, 10);
        
        if (Math.abs(aimTop - curTop) < 1) {
            toptrack = aimTop;
            tkol.style.top = toptrack + 'px';
        } else {
            toptrack = curTop + ((aimTop - curTop) / smooth1);
            tkol.style.top = toptrack + 'px';
            slideit(tkol, toptrack);
        }
    }, delay2);
}

//set images
function createKolj() { 'use strict';
                      }
function setpic(count, id) {
    'use strict';
    setTimeout(function () {
        var rand = Math.floor(Math.random() * pics.length),
            kiupic = pics[rand],
            elem = document.createElement('img'),
            kolumo = document.getElementById(id);
        elem.setAttribute('src', kiupic);
        elem.style.width = kolw + 'px';
        elem.style.display = "block";
        kolumo.appendChild(elem);
        if (parseInt(kolumo.clientHeight, 10) <  winh) {
            setpic(count, id);
        } else {
            slideit(kolumo, parseInt(kolumo.style.top, 10));
            count += 1;
            if (count < kolj) {
                createKolj(count);
            } else {
                finish();
            }
        }
    }, delay1);
}

//image chooser
function createKolj(count) {
    'use strict';
    var kolid = "kol" + count,
        holddiv = document.createElement('div');
     
    holddiv.style.width = kolw + "px";
    holddiv.setAttribute("id", kolid);
    holddiv.style.position = "absolute";
    holddiv.style.top = "0";
    holddiv.style.left = (count * kolw) + "px";
    theDiv.appendChild(holddiv);
    
    setpic(count, kolid);
}

function loadpics() {
    'use strict';
    theDiv.innerHTML = "";
    var count = 0,
        ujo = document.getElementById("cloud-container"),
        burst = document.getElementById("burst");

    if (burst === true) {
        ujo.removeChild(burst);
    }
    
    winw = window.innerWidth;
    winh = window.innerHeight;
    kolw = winw / kolj;
    createKolj(count);
}

function sleep() {
    'use strict';
    scramvars();
    setTimeout(loadpics, delay3);
}

window.addEventListener('load', loadpics);
window.addEventListener('resize', sleep);
window.addEventListener('click', sleep);