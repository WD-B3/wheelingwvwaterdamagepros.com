(function(){var b=document.querySelector('.menubtn'),m=document.getElementById('mobilemenu');if(!b||!m)return;
function setOpen(o){m.classList.toggle('open',o);b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');b.innerHTML=o?'&times;':'&#9776;';}
b.addEventListener('click',function(){setOpen(!m.classList.contains('open'));});
document.addEventListener('keydown',function(e){if(e.key==='Escape')setOpen(false);});
window.matchMedia('(min-width: 901px)').addEventListener('change',function(e){if(e.matches)setOpen(false);});})();