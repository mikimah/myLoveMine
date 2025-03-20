const lyris =[
        {words:"...",seconds:6000},
        {words:"Moon, tell me if I could",seconds:3500},
        {words:"Send up my heart to you?",seconds:3500},
        {words:"So, when I die, which I must do",seconds:3500},
        {words:"Could it shine down here with you?",seconds:3500},
        {words:"'Cause my love is mine, all mine",seconds:4400},
        {words:"My love mine, mine, mine",seconds:3500},
        {words:"Nothing in the world belongs to me",seconds:3400},
        {words:"But my love, mine, all mine, all mine",seconds:5500},
        {words:"...",seconds:6000},
        
]
const audioE = document.querySelector('.audioE');
let onGoing = false;

function changeSky(){
    if(onGoing==false){
        onGoing = true;
        document.querySelector(".c1").style.left = "30vw";
        document.querySelector(".c1").style.opacity = "0";
        document.querySelector(".c2").style.left="-20vw";
        document.querySelector(".c2").style.opacity = "0";
        document.querySelector(".theSky").style.opacity="1";
        addStars();
        audioE.currentTime = 19;
        audioE.play();
        showLyris();
        setTimeout(()=>stopSky(),44500);
    }
   
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function showLyris(){
    const textBox= document.querySelector(".textBox");
    const textLyris= document.querySelector(".textLyris");
    for(let i=0;i<lyris.length;i++){
        textLyris.style.opacity="0.9";
        textLyris.textContent=lyris[i].words;
        await delay(lyris[i].seconds);
        textLyris.style.opacity="0";
        await delay(500);
    }
}

function stopSky(){
    audioE.pause();
    document.querySelector(".theSky").style.opacity="0";
    document.querySelector(".c1").style.left = "80%";
    document.querySelector(".c1").style.opacity = "1";
    document.querySelector(".c2").style.left="20%";
    document.querySelector(".c2").style.opacity = "1";
    document.querySelector(".starBox").innerHTML="";
    onGoing = false;
}

const checkFont = document.querySelector(".textLyris");




function addStars(){
   const starBox = document.querySelector(".starBox");
   const viewportWidth = window.innerWidth;
   let numStar =25;
    if(viewportWidth<=600) numStar=15;
    for(let i=0;i<numStar;i++){
        const xP = Math.floor(Math.random()*100);
        const yP = Math.floor(Math.random()*100);
        const second = Math.floor((Math.random()*6)+3);
        const spanE = document.createElement("span");
        spanE.classList.add("star");
        spanE.style.left=`${xP}%`;
        spanE.style.top=`${yP}%`;
        spanE.style.animation = `sparkle ${second}s infinite linear`;
        starBox.append(spanE);
    }
}
