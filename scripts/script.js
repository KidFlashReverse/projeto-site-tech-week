var page = $("html, body");
var i = 0;
var n = 0;
var animationDuration = 1000;
$(".scroll").click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});

function teste(){
    var scroll = document.getElementById('scroll');
    var scroll2 = document.getElementById('scroll2');
    var img = document.getElementById('sc');
    i += 1;
    if (i === 1){
        scroll.setAttribute("href", "#l1");
    }else if(i === 2){
        scroll.setAttribute("href", "#l2");
    }else if (i === 3){
        scroll.setAttribute("href", "#l3");
        img.setAttribute("src", "../imagens/seta3.png");
    }else if(i === 4){
        scroll.setAttribute("href", "#hed");
        i=0;
    }
    if (i === 0){
        img.setAttribute("src", "../imagens/seta2.png");
    }

    if (i > 0){
        scroll2.setAttribute("style", "display: block;");
    }else{
        scroll2.setAttribute("style", "display: none;");
    }
}
function teste2(){
    var scroll2 = document.getElementById('scroll2');
    var img = document.getElementById('sc');
    i -= 1;
    if (i === 0){
        scroll2.setAttribute("href", "#hed");
    }else if(i === 1){
        scroll2.setAttribute("href", "#l1");
    }else if (i === 2){
        scroll2.setAttribute("href", "#l2");
        img.setAttribute("src", "../imagens/seta3.png");
    }

    if (i > 0){
        scroll2.setAttribute("style", "display: block;");
    }else{
        scroll2.setAttribute("style", "display: none;");
    }   
}

function mais(){
    var fechar = document.querySelector('#fechar');
    var foto1 = document.querySelector('.eitas');
    var foto2 = document.querySelector('.eitas2');
    var foto3 = document.querySelector('.eitas3');
    var corpo = document.getElementById('sec');
    n += 1;
    console.log (n);

    if (n === 1){
        corpo.style.cssText = 'filter: blur(10px);';
        foto1.style.cssText = 'display: block;';
        foto2.style.cssText = 'display: block;';
        foto3.style.cssText = 'display: block;';
        fechar.style.cssText = 'display: block;';
    }else{
        corpo.style.cssText = 'filter: blur(0px);';
        foto1.style.cssText = 'display: none;';
        foto2.style.cssText = 'display: none;';
        foto3.style.cssText = 'display: none;';
        fechar.style.cssText = 'display: none;';
        n = 0;
    }
    

}