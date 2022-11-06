const body = document.querySelector('body');
const titles = document.querySelector('.heading').children;
let width = document.body.clientWidth;

width = document.body.clientWidth;
if (width <= 697){
    for (i=0; i < titles.length; i++){
        if (titles[i].tagName === 'P'){ 
            titles[i].style.textAlign = 'center';
        }
        else {
            titles[i].style.justifyContent = 'center';
        }
    }
} 
else {
    for (i=0; i < titles.length; i++){
        if (titles[i].tagName === 'P'){ 
            titles[i].style.textAlign = 'left';
        }
        else {
            titles[i].style.justifyContent = 'left';
        }
    }
}

document.body.onresize = function(){
    width = document.body.clientWidth;
    if (width <= 697){
        for (i=0; i < titles.length; i++){
            if (titles[i].tagName === 'P'){ 
                titles[i].style.textAlign = 'center';
            }
            else {
                titles[i].style.justifyContent = 'center';
            }
        }
    } 
    else {
        for (i=0; i < titles.length; i++){
            if (titles[i].tagName === 'P'){ 
                titles[i].style.textAlign = 'left';
            }
            else {
                titles[i].style.justifyContent = 'left';
            }
        }
    }
}

