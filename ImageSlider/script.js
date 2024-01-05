const slides=document.querySelectorAll('.slide');
const next=document.querySelector('#next')
const prev=document.querySelector('#prev')

var counter=0;
slides.forEach((slide,index)=>{
    slide.style.left=`${index*100}%`
})

const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`
    })
};

const prevChange=()=>{
    if(counter>0){
        counter--;
        slideImage();
    }
  
}
const nextChange=()=>{
    if(counter<3){
        counter++;
        slideImage();
    }
    
}

prev.addEventListener('click',prevChange,false); 
next.addEventListener('click',nextChange,false); 




