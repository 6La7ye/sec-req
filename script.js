// Initialize configuration
const config = window.VALENTINE_CONFIG || {};

// ================= CONFIG VALIDATION =================
function validateConfig() {
    if (!config.valentineName) config.valentineName = "My Love";
    if (!config.pageTitle) config.pageTitle = "Valentine 💝";

    config.colors = config.colors || {};
    config.animations = config.animations || {};
    config.music = config.music || { enabled: false };

    const isValidHex = hex =>
        /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);

    const defaultColors = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };

    Object.keys(defaultColors).forEach(key => {
        if (!isValidHex(config.colors[key])) {
            config.colors[key] = defaultColors[key];
        }
    });

    if (!config.animations.floatDuration || parseFloat(config.animations.floatDuration) < 5) {
        config.animations.floatDuration = "5s";
    }

    if (
        typeof config.animations.heartExplosionSize !== "number" ||
        config.animations.heartExplosionSize < 1 ||
        config.animations.heartExplosionSize > 3
    ) {
        config.animations.heartExplosionSize = 1.5;
    }
}

// ================= INIT =================
document.title = config.pageTitle;

window.addEventListener("DOMContentLoaded", () => {
    validateConfig();

    document.getElementById("valentineTitle").textContent =
        `${config.valentineName}, my love...`;

    document.getElementById("question1Text").textContent = config.questions.first.text;
    document.getElementById("yesBtn1").textContent = config.questions.first.yesBtn;
    document.getElementById("noBtn1").textContent = config.questions.first.noBtn;
    document.getElementById("secretAnswerBtn").textContent = config.questions.first.secretAnswer;

    document.getElementById("question2Text").textContent = config.questions.second.text;
    document.getElementById("startText").textContent = config.questions.second.startText;
    document.getElementById("nextBtn").textContent = config.questions.second.nextBtn;

    document.getElementById("question3Text").textContent = config.questions.third.text;
    document.getElementById("yesBtn3").textContent = config.questions.third.yesBtn;
    document.getElementById("noBtn3").textContent = config.questions.third.noBtn;

    createFloatingElements();
    hideMusic();
    initLoveMeter();
});

// ================= FLOATING ELEMENTS =================
function createFloatingElements() {
    const container = document.querySelector(".floating-elements");
    if (!container) return;

    [...(config.floatingEmojis?.hearts || []),
     ...(config.floatingEmojis?.bears || [])].forEach(e => {
        const div = document.createElement("div");
        div.className = "heart";
        div.innerHTML = e;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

function setRandomPosition(el) {
    el.style.left = Math.random() * 100 + "vw";
    el.style.animationDelay = Math.random() * 5 + "s";
    el.style.animationDuration = 10 + Math.random() * 20 + "s";
}

// ================= QUESTIONS =================
function showNextQuestion(n) {
    document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));
    document.getElementById(`question${n}`)?.classList.remove("hidden");
}

function moveButton(btn) {
    btn.style.position = "fixed";
    btn.style.left = Math.random() * (window.innerWidth - btn.offsetWidth) + "px";
    btn.style.top = Math.random() * (window.innerHeight - btn.offsetHeight) + "px";
}

// ================= LOVE METER =================
function initLoveMeter() {
    const loveMeter = document.getElementById("loveMeter");
    const loveValue = document.getElementById("loveValue");
    const extraLove = document.getElementById("extraLove");

    if (!loveMeter) return;

    loveMeter.value = 100;
    loveValue.textContent = 100;

    loveMeter.addEventListener("input", () => {
        const v = +loveMeter.value;
        loveValue.textContent = v;

        if (v > 100) {
            extraLove.classList.remove("hidden");
            if (v >= 5000) {
                extraLove.textContent = config.loveMessages.extreme;
                extraLove.classList.add("super-love");
            } else if (v > 1000) {
                extraLove.textContent = config.loveMessages.high;
                extraLove.classList.remove("super-love");
            } else {
                extraLove.textContent = config.loveMessages.normal;
                extraLove.classList.remove("super-love");
            }
        } else {
            extraLove.classList.add("hidden");
            extraLove.classList.remove("super-love");
        }
    });
}

// ================= CELEBRATION =================
function celebrate() {
    document.querySelectorAll(".question-section").forEach(q => q.classList.add("hidden"));

    const celebration = document.getElementById("celebration");
    celebration.classList.remove("hidden");

    document.getElementById("celebrationTitle").textContent = config.celebration.title;
    document.getElementById("celebrationEmojis").textContent = config.celebration.emojis;

    if (config.celebration.image && !document.getElementById("celebrationImg")) {
        const img = document.createElement("img");
        img.id = "celebrationImg";
        img.src = config.celebration.image;
        img.style.maxWidth = "280px";
        img.style.borderRadius = "20px";
        img.style.display = "block";
        img.style.margin = "20px auto";
        celebration.insertBefore(img, document.getElementById("celebrationEmojis"));
    }
}

// ================= MUSIC (DISABLED) =================
function hideMusic() {
    const mc = document.getElementById("musicControls");
    if (mc) mc.style.display = "none";
}