var x = document.getElementById("box");
var height = 720;
var maxHeight = 40;
var slides = ["1", "2", "3"]
x.addEventListener("click", Multiply)
function Multiply() {
    if (maxHeight <= height) {
        for (let i = 0; i < 323; i++) {
            var box = document.createElement('div');
            box.id = "myDiv";
            x.appendChild(box);
            maxHeight = maxHeight + 40;
        }
    }
    else {
        
    }
}
















/*var rgb = getAverageRGB(document.getElementById('i'));
var canvas = document.getElementById('canvas');
canvas.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';

function getAverageRGB(imgEl) {

var blockSize = 5, // only visit every 5 pixels
    defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
    canvas = document.createElement('canvas'),
    context = canvas.getContext && canvas.getContext('2d'),
    data, width, height,
    i = -4,
    length,
    rgb = {r:0,g:0,b:0},
    count = 0;
    
if (!context) {
    return defaultRGB;  
}

height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

context.drawImage(imgEl, 0, 0);

try {
    data = context.getImageData(0, 0, width, height);
} catch(e) {
    return defaultRGB;
}

length = data.data.length;

while ( (i += blockSize * 4) < length ) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i+1];
    rgb.b += data.data[i+2];
}

// ~~ used to floor values
rgb.r = ~~(rgb.r/count);
rgb.g = ~~(rgb.g/count);
rgb.b = ~~(rgb.b/count);

return rgb;

}*/