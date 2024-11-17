let slideNum = 1;
let timer = 0;
let n;
var currentSlide

var loading = document.getElementById("loading")

function changeSlide(n)
{
    currentSlide = document.getElementById("slide"+slideNum);
    currentSlide.style.setProperty('display',"none","important")
    slideNum+=n
    if(slideNum == 0) slideNum = 4
    if(slideNum == 5) slideNum = 1
    currentSlide = document.getElementById("slide"+slideNum)
    currentSlide.style.setProperty('display',"flex","important")
    
    currentSlide.style.animation = "showSlide 1s"
    
    timer=0;
    
}



setInterval(()=>{
    timer++
    loading.style.width = timer/8+"%"
    if(timer==800) changeSlide(1)
},10)

const textWriter = document.getElementById("writingText")
const words = [ "Tworzone z pasją ","Nowoczesne", "Estetyczne", "Profesjonalne" ]

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function writeText()
{
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0,charIndex)
    textWriter.textContent = currentChar;

    if(!isDeleting && charIndex<currentWord.length)
    {
        charIndex++;
        setTimeout(writeText,Math.random()*100+100);
    }
    else if (isDeleting && charIndex>0)
    {
        charIndex--;
        setTimeout(writeText,50);

    }
    else
    {
        isDeleting = !isDeleting
        wordIndex = !isDeleting ? (wordIndex+1) % words.length : wordIndex
        setTimeout(writeText,500);
    }
    
}
writeText()
