console.log("JS Loaded ✅");

// ===== PAGE LOAD (INDEX PAGE ANIMATION) =====
window.addEventListener("load", function () {
    console.log("PAGE LOADED");

    const gate = document.querySelector(".gate-container");

    if (gate) {
        console.log("GATE FOUND");

        // 🚪 OPEN DOOR
        setTimeout(() => {
            gate.classList.add("open");
            console.log("OPEN CLASS ADDED");
        }, 800);

        // 💖 SHOW TEXT AFTER DOOR OPENS
        setTimeout(() => {
            document.body.classList.add("show-text");
            console.log("TEXT SHOWN");
        }, 2000);

    } else {
        console.log("GATE NOT FOUND ❌");
    }
});


// ===== GLOBAL FUNCTIONS =====

// 😏 SECRET BUTTON
window.yeayy = function () {
    const el = document.getElementById("yeayy-text");
    if (el) {
        el.innerText = "Yeayy";
    }
};

// 💌 ENVELOPE
window.openEnvelope = function (el) {
    el.classList.toggle("open");
};

// 📦 GIFT BOX
window.openBox = function (box) {
    box.classList.toggle("open");
};

// 💖 MESSAGE BUTTONS
window.showMessage = function (id) {
    document.querySelectorAll(".message-box").forEach(box => {
        box.style.display = "none";
    });

    const el = document.getElementById(id);
    if (el) el.style.display = "block";
};

// 📸 NAVIGATION
window.goToMemories = function () {
    window.location.href = "memories.html";
};

window.enterSite = function () {
    window.location.href = "home.html";
};

// 💖 FLOATING HEARTS
function createHeart() {
    const container = document.querySelector(".hearts-bg");
    if (!container) return;

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerText = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    container.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 8000);
}

function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    sparkle.style.left = Math.random() * 100 + "vw";
    sparkle.style.animationDuration = (3 + Math.random() * 3) + "s";

    document.querySelector(".sparkles").appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 6000);
}

setInterval(createSparkle, 150);

// run hearts
setInterval(createHeart, 300);


window.revealGifts = function () {
    const gifts = document.querySelector(".gift-container");

    gifts.style.opacity = "1";
    gifts.style.transform = "translateY(0)";
};





function createBurst(x, y, container) {
    for (let i = 0; i < 12; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle-burst");

        const angle = Math.random() * 360;
        const distance = 50 + Math.random() * 50;

        sparkle.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        sparkle.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        sparkle.style.left = x + "px";
        sparkle.style.top = y + "px";

        container.appendChild(sparkle);

        setTimeout(() => sparkle.remove(), 800);
    }
    
}

window.goToFinal = function () {
    window.location.href = "final.html";
};



// music

window.playMusic = function () {
    const music = document.getElementById("bg-music");

    if (music) {
        music.volume = 0.3;

        // ⏱️ restore time if exists
        const savedTime = localStorage.getItem("musicTime");
        if (savedTime) {
            music.currentTime = savedTime;
        }

        music.play();

        // 💾 keep saving time continuously
        setInterval(() => {
            localStorage.setItem("musicTime", music.currentTime);
        }, 1000);
    }
};


