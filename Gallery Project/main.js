const imageLauncher = document.querySelectorAll(".image");
const imageLarge = document.querySelector(".large-image");
const galleryModal = document.querySelector(".gallery-modal");
const body = document.getElementById("body")

let activeImage = "";

imageLauncher.forEach((item)=>{
    item.addEventListener("click",(e)=>{

        activeImage = item.src;
        activeImage = activeImage.replace("small","large");
        LargeGallery();
    })
})

galleryModal.addEventListener("click",()=>{
    closeGallery();
})

// show gallery function
function LargeGallery(){
    imageLarge.src = activeImage;
    body.classList.add("gallery-shower");
}

//close gallery function
function closeGallery(){
    body.classList.remove("gallery-shower");
}