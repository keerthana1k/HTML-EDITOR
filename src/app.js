const editor = document.querySelector('.output').contentWindow;

editor.document.head.appendChild(document.createElement('style'));

function HTMLrender(target){
    editor.document.body.innerHTML = target.value;
}
function CSSrender(target){
   editor.document.head.querySelector('style').innerHTML = target.value;
   
}
