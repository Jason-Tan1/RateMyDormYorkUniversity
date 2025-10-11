const showButton = document.getElementById("showButton");
const message = document.getElementById("message");

if (showButton && message) {
    showButton.addEventListener("click", () => {
        message.style.display = "block";
    });
}

const faqButtons = [
    { buttonId: "faqButton1", answerId: "faqAnswer1" },
    { buttonId: "faqButton2", answerId: "faqAnswer2" },
    { buttonId: "faqButton3", answerId: "faqAnswer3" }
];

faqButtons.forEach(({ buttonId, answerId }) => {
    const button = document.getElementById(buttonId);
    const answer = document.getElementById(answerId);

    if (button && answer) {
        button.addEventListener("click", () => {
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    }
});
