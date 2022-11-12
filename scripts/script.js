var page = $("html, body");
var i = 0;
var n = 0;
var per = 0;
var animationDuration = 1000;

$(".scroll").click(function() {
    page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, animationDuration);
    return false;
});

window.onload = function(){
    let divs = $('.FIFA').length;
    let barra = document.getElementById('barra');
    per += 100 / divs;
    barra.style.cssText = 'height: ' + per + '%;';
}

function teste(direcao){
    let scroll = document.getElementById('scroll');
    let scroll2 = document.getElementById('scroll2');
    let img = document.getElementById('sc');
    let barra = document.getElementById('barra');
    let divs = $('.FIFA').length;
    i += 1;
    per += 100 / divs;
    let stg = i.toString();
    let link = '#l' + stg;

    if (direcao === 'baixo'){
        if (i < divs){
            scroll.setAttribute("href", link);
            barra.style.cssText = 'height: ' + per + '%;';
        }else if(i === divs){
            scroll.setAttribute("href", "#l0");
            i=0;
            barra.style.cssText = 'height: ' + (100/divs) + '%;';
            per = 100/divs;
        }
    }else if(direcao === 'cima'){
        i -= 2;
        stg = i.toString();
        link = '#l' + stg;
        per = per - 2*(100 / divs);
        if (i <= divs){
            scroll2.setAttribute("href", link);
            barra.style.cssText = 'height: ' + per + '%;';
        }
    }
        
    if (i === divs - 1){
        img.setAttribute("src", "../imagens/seta3.png");
    }else{
        img.setAttribute("src", "../imagens/seta2.png");
    }
    
    if (i > 0){
        scroll2.setAttribute("style", "display: block;");
    }else{
        scroll2.setAttribute("style", "display: none;");
    }
    
}

function mais(bloco){
    let fechar = document.querySelector('#fechar');
    let fotos = document.querySelector('#fotos');
    let corpo = document.getElementById('sec');
    let scroll = document.querySelector('#scroll');
    let scroll2 =  document.querySelector('#scroll2');
    let img1 = document.querySelector('#um1');
    let img2 = document.querySelector('#dois1');
    let img3 = document.querySelector('#tres1');
    let vid1 = document.querySelector('#um2');
    let vid2 = document.querySelector('#dois2');
    let vid3 = document.querySelector('#tres2');
    n += 1;

    if (n === 1){
        corpo.style.cssText = 'filter: blur(10px)';
        scroll.style.cssText = 'filter: blur(10px);';
        fotos.style.cssText = 'display: block';
        fechar.style.cssText = 'display: block;';
    }else{
        corpo.style.cssText = 'filter: blur(0px);';
        scroll.style.cssText = 'filter: blur(0px);';
        fotos.style.cssText = 'display: none';
        fechar.style.cssText = 'display: none;';
        n = 0;
    }
    if(i != 0 && n === 1){
        scroll2.style.cssText = 'display: block; filter: blur(10px);';
    }else if(i != 0 && n != 1){
        scroll2.style.cssText = 'display: block; filter: blur(0px);';
    }else{
        scroll2.style.cssText = 'filter: blur(0px);';
    }
    
    if (bloco === 'um'){
        img1.setAttribute("src", "../imagens/fif_game.jpeg");
        img2.setAttribute("src", "../imagens/fifa_win.jpeg");
        img3.setAttribute("src", "../imagens/fif_ last.jpeg");
        vid1.setAttribute("src", "");
        vid2.setAttribute("src", "");
        vid3.setAttribute("src", "");
    }else if(bloco === 'dois'){
        img1.setAttribute("src", "../imagens/ff_e.jpeg");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        vid1.setAttribute("src", "");
        vid2.setAttribute("src", "../video/ff_m.mp4");
        vid3.setAttribute("src", "../video/ff_d.mp4");
    }else if(bloco === 'tres'){
        img1.setAttribute("src", "../imagens/rv_e.jpeg");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "../imagens/rv_d.jpeg");
        vid1.setAttribute("src", "");
        vid2.setAttribute("src", "../video/rv_m.mp4");
        vid3.setAttribute("src", "");
    }else if(bloco === 'quatro'){
        img1.setAttribute("src", "../imagens/kh_e.jpeg");
        img2.setAttribute("src", "");
        img3.setAttribute("src", "");
        vid1.setAttribute("src", "");
        vid2.setAttribute("src", "../video/kh_m.mp4");
        vid3.setAttribute("src", "../video/kh_d.mp4");
    }

    if (vid1.src != "file:///C:/Users/walla/Downloads/projeto-site-tech-week/paginas/jogos.html"){
        img1.style.cssText = 'display: none;';
    }else{
        img1.style.cssText = 'display: block;';
    }
    if (vid2.src != "file:///C:/Users/walla/Downloads/projeto-site-tech-week/paginas/jogos.html"){
        img2.style.cssText = 'display: none;';
    }else{
        img2.style.cssText = 'display: block;';
    }
    if (vid3.src != "file:///C:/Users/walla/Downloads/projeto-site-tech-week/paginas/jogos.html"){
        img3.style.cssText = 'display: none;';
    }else{
        img3.style.cssText = 'display: block;';
    }

}