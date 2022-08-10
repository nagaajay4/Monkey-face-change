const openFace=document.querySelector('.open');
const eyesFace=document.querySelector(".eyes");
const earsFace=document.querySelector('.ears');
const mouthFace=document.querySelector(".mouth");

openFace.addEventListener('click', () => {
    if(eyesFace.classList.contains('eyes')) {
        eyesFace.classList.add('active');
        openFace.classList.remove('active');
        
    }

});
eyesFace.addEventListener('click', () => {
    if(earsFace.classList.contains('ears')) {
        earsFace.classList.add('active');
        eyesFace.classList.remove('active');
    }

});

earsFace.addEventListener('click', () => {
    if(mouthFace.classList.contains('mouth')) {
        mouthFace.classList.add('active');
        earsFace.classList.remove('active');
    }

});
mouthFace.addEventListener('click', () => {
    if(eyesFace.classList.contains('eyes')) {
        eyesFace.classList.add('active');
        mouthFace.classList.remove('active');
    }

});
