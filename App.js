const mainD = document.querySelector("#main");

const urlPaste = document.querySelector("#input");
const generateQrCode = document.querySelector("#submit");

const qrGeneratedImage = document.querySelector("#img");



generateQrCode.addEventListener('click',()=>{

if(!input.value.length == 0){
generateQrCode.innerHTML = "Qr Code Generating...";
qrGeneratedImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;

}

qrGeneratedImage.addEventListener("load",()=>{
    generateQrCode.innerHTML = "Qr Code Generated";
    qrGeneratedImage.hidden = "false";

    const downloadImg = document.createElement('a');
    downloadImg.style.display="block";
    downloadImg.setAttribute("download",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
    downloadImg.setAttribute("href",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`);
    downloadImg.innerHTML = "Click to Download QR-CODE";
    mainD.appendChild(downloadImg);

})

})
