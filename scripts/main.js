const introBtn = document.getElementById("introBtn");
const introText = document.getElementById("introText");

if (introBtn) {
    introBtn.addEventListener("click", function () {
        introText.textContent = "This website introduces my learning and interests.";
    });
}

const portfolioBtn = document.getElementById("portfolioBtn");
const portfolioText = document.getElementById("portfolioText");

if (portfolioBtn) {
    portfolioBtn.addEventListener("click", function () {
        portfolioText.textContent = "My portfolio connects music, creativity, and web development.";
    });
}

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeBtn.textContent = "Light";
        } else {
            themeBtn.textContent = "Dark";
        }
    });
}