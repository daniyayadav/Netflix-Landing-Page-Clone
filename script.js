// ==========================
// FAQ ACCORDION FUNCTIONALITY
// ==========================

const faqBoxes = document.querySelectorAll(".faqbox");

faqBoxes.forEach(box => {
    box.addEventListener("click", () => {
        const isActive = box.classList.contains("active");

        // Close all FAQ boxes first
        faqBoxes.forEach(item => {
            item.classList.remove("active");
            item.querySelector("svg").style.transform = "rotate(0deg)";
        });

        // Toggle current box
        if (!isActive) {
            box.classList.add("active");
            box.querySelector("svg").style.transform = "rotate(45deg)";
        }
    });
});


// ==========================
// EMAIL VALIDATION
// ==========================

const getStartedBtn = document.querySelector(".btn-red");
const emailInput = document.querySelector(".main input");

getStartedBtn.addEventListener("click", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        alert("Please enter your email address");
        return;
    }

    if (!validateEmail(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Welcome to Netflix 🎉 (Demo project)");
    emailInput.value = "";
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// ==========================
// BUTTON HOVER EFFECT (OPTIONAL)
// ==========================

const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.opacity = "0.9";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.opacity = "1";
    });
});
