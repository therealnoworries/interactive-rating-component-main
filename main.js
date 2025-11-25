// 1) grab the elements i need from the Dom and attach event listeners
// 2) keep track of the selected rating by putting it in a state variable so i can use it later when submitting
// 3) handle rating selection 
// 4) handle sumit:when submit btn is clicked it either show Thank You or warn user to select first

// Dom elements
const ratingButtons = document.querySelectorAll(".rating-btn");
ratingButtons.forEach(btn => {
    btn.addEventListener("click", () => setActiveButton(btn));
});
const submitBtn = document.querySelector(".submit-btn").addEventListener("click", handleSubmit)
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thank-you-card");
const selectedRatingText = document.getElementById("selected-rating")


// Varaible state
let selectedRating = null;

//Functions

// remove highlights/active state from all rating buttons

function clearActiveButtons() {
    ratingButtons.forEach(btn => btn.classList.remove("active"));
}

// highlight the click button and save its value
function setActiveButton(btn) {
    clearActiveButtons();
    btn.classList.add("active");
    selectedRating = btn.textContent;
}

//show the thank-you-card with the selected rating
function showThankYouCard() {
    selectedRatingText.textContent = selectedRating;
    ratingCard.classList.add("hidden");
    thankYouCard.classList.remove("hidden");
}

// Handle submit click: checl if a rating exists; if yes, show thank-you card and if no, show alert
function handleSubmit() {
    if (selectedRating) {
        showThankYouCard();
    } else {
        alert("Please select a rating before submitting.");
    }
}
