// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    valentineName: "Sonia",

    // The title that appears in the browser tab
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['🧸', '🐻']
    },

    // Questions and answers
    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No",
            secretAnswer: "I don't like you, I love you! ❤️"
        },
        second: {
            text: "How much do you love me?",
            startText: "This much!",
            nextBtn: "Next ❤️"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    },

    // Love meter messages
    loveMessages: {
        extreme: "WOOOOW You love me that much?? 🥰🚀💝",
        high: "OKKKK OK I GET IT 🚀💝",
        normal: "WESH TOUT ÇA LA ???🥰"
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
        message: "I LOVE YOU MORE THAN ANYTHING MY LOVE JTM JTM JTM",
        emojis: "💖🤗💝💋❤️💕",
        
        image: "https://i.pinimg.com/736x/ab/60/1f/ab601f2ba1915b8e193a7795ffae7f43.jpg"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",

        buttonBackground: "#ff6b6b",   // YES buttons
        buttonHover: "#ff8787",

        noButtonBackground: "#444444", // ✅ NO buttons
        noButtonHover: "#666666",

        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    }
};

// Don't modify anything below this line
window.VALENTINE_CONFIG = CONFIG;