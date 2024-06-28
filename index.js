let image=document.getElementById("imge");
let content=document.getElementById("content");
let btnClick=document.getElementById("btnclick");

btnClick.onclick=()=>{
    if(content.value=='')return;
    let linkQR='https://api.qrserver.com/v1/create-qr-code';
    image.src=linkQR+'/?size=400x400&data='+content.value;
}