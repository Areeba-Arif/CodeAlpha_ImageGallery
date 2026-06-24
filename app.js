const galleryImages = document.querySelectorAll(".gallery img");

if(galleryImages.length > 0){

const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

galleryImages.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        currentIndex=index;

        lightbox.style.display="flex";

        showImage();

    });

});

function showImage(){

    lightboxImg.src=galleryImages[currentIndex].src;

}

nextBtn.addEventListener("click",()=>{

    currentIndex++;

    if(currentIndex>=galleryImages.length){
        currentIndex=0;
    }

    showImage();

});

prevBtn.addEventListener("click",()=>{

    currentIndex--;

    if(currentIndex<0){
        currentIndex=galleryImages.length-1;
    }

    showImage();

});

closeBtn.addEventListener("click",()=>{

    lightbox.style.display="none";

});

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){
        lightbox.style.display="none";
    }

});

/* FILTERS */

const buttons=document.querySelectorAll(".filter-buttons button");
const images=document.querySelectorAll(".image");

buttons.forEach(button=>{

    button.addEventListener("click",()=>{

        buttons.forEach(btn=>{
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter=button.dataset.filter;

        images.forEach(image=>{

            if(filter==="all" || image.classList.contains(filter)){
                image.style.display="block";
            }
            else{
                image.style.display="none";
            }

        });

    });

});

}