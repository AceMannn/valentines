let noClickCount = 0;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionText = document.querySelector(".question"); 
const buttonContainer = document.querySelector(".buttons"); 
const messageContainer = document.getElementById("messageContainer");
const catImage = document.getElementById("catImage"); 

const noGifs = [
    "./inserts/cat1.gif",
    "./inserts/cat2.gif",
    "./inserts/cat3.gif",
    "./inserts/cat4.gif",
    "./inserts/cat5.gif",
    "./inserts/cat6.gif",
    "./inserts/cat7.gif"
];

const yesGif = "./inserts/cat8.gif"; 

const noMessages = [
    "",  
    { text: "You sure?", width: 130, height: 40, fontSize: 20 },
    { text: "Really sure?", width: 130, height: 40, fontSize: 18 },
    { text: "Please?", width: 120, height: 35, fontSize: 20 },
    { text: "Ouch!", width: 110, height: 30, fontSize: 18 },
    { text: "Don't do this!", width: 110, height: 30, fontSize: 14 },
    { text: "No... Please!", width: 100, height: 25, fontSize: 14 },
    { text: "Sobbing...", width: 90, height: 25, fontSize: 16 }
];

function changeCatImage(newSrc) {
    catImage.style.opacity = "0"; 
    setTimeout(() => {
        catImage.src = newSrc; 
        catImage.style.opacity = "1"; 
    }, 300);
}

noBtn.addEventListener("click", function () {
    if (noClickCount < noGifs.length) {
        changeCatImage(noGifs[noClickCount]); 
    }

    noClickCount++;

    if (noClickCount < noMessages.length) {
        if (noMessages[noClickCount].text) {
            noBtn.textContent = noMessages[noClickCount].text;
            noBtn.style.width = noMessages[noClickCount].width + "px";
            noBtn.style.height = noMessages[noClickCount].height + "px";
            noBtn.style.fontSize = noMessages[noClickCount].fontSize + "px";
        }
    }

    let newSize = 45 + noClickCount * 5; 
    let newWidth = 160 + noClickCount * 15; 
    let newHeight = 80 + noClickCount * 10; 

    yesBtn.style.fontSize = newSize + "px";
    yesBtn.style.width = newWidth + "px";
    yesBtn.style.height = newHeight + "px";

    if (noClickCount >= 7) {
        noBtn.style.opacity = "0"; 
        setTimeout(() => {
            noBtn.style.display = "none"; 
        }, 500);
    }
});

yesBtn.addEventListener("click", function () {
    questionText.style.opacity = "0"; 
    buttonContainer.style.opacity = "0"; 

    setTimeout(() => {
        questionText.style.display = "none";
        buttonContainer.style.display = "none";
        
        messageContainer.style.display = "block";
        setTimeout(() => {
            messageContainer.style.opacity = "1";
        }, 100);

        changeCatImage(yesGif); 
    }, 500); 
});
