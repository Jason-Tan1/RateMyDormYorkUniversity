/** 
// Debugging to make sure script is running
console.log("JavaScript is running..."); 

// Selecting elements
const form = document.getElementById("review-form");
const starsInput = document.getElementById("stars");
const commentInput = document.getElementById("comment");
const imagesInput = document.getElementById("images");
const reviewsContainer = document.getElementById("reviews-container");
const averageRatingDisplay = document.getElementById("average-rating");

// Tracking reviews
let reviews = [
  { stars: 4, comment: "Great dorm with friendly people.", images: [] },
  { stars: 3, comment: "Rooms are small, but location is good.", images: [] }
];

// Function to calculate average rating
function updateAverageRating() {
  let totalStars = 0; // Initializing variable
  for (let i = 0; i < reviews.length; i++) {
    totalStars += reviews[i].stars; // Adding stars
  }
  const average = (totalStars / reviews.length).toFixed(1); 
  averageRatingDisplay.textContent = average; // Update DOM
}

// Function to add review
function addReview(stars, comment, images) {
  // Add new review to array
  // let commentNew = sessionStorage.getItem("comment");
  reviews.unshift({ stars, comment, images });
// const temp = document.getElementById("p1").innerText;
// console.log(temp);

  // Creating review element
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <div class="stars">${"★".repeat(stars)}${"☆".repeat(5 - stars)}</div>
    <p class="comment">"${comment}"</p>
  `;

  // If images exist
  if (images.length > 0) {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    for (let i = 0; i < images.length; i++) {
      const img = document.createElement("img");
      img.src = images[i]; // Setting image src
      img.alt = "Uploaded image";
      img.classList.add("review-image");
      imageContainer.appendChild(img);
    }
    reviewElement.appendChild(imageContainer);
  }

  reviewsContainer.prepend(reviewElement); 
  updateAverageRating(); // Update average
}

// Form submission listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const stars = parseInt(starsInput.value); 
  const comment = commentInput.value; 
  const imageFiles = Array.from(imagesInput.files); 
  sessionStorage.setItem("rating",stars)
  sessionStorage.setItem("comment",comment)

  if (stars < 1 || stars > 5 || isNaN(stars)) {
    alert("Rating must be between 1 and 5."); 
    return; 
  }

  if (imageFiles.length > 5) {
    alert("Maximum 5 images allowed.");
    return;
  }

  const imageUrls = imageFiles.map(file => URL.createObjectURL(file));
  addReview(stars, comment, imageUrls);
  form.reset();    //create a textfile and store this info in the text file
  //then when you open a unis rating page make it so that it reads the text file and it shows everything on it
  //store the images by saving them then loading them when you open york university page
  //store them in a folder in the code, idealy in the database
  //need to have a backend code for the project, then send that data into the front end
  //backend call that reads them to express
});

// Initial call to update average rating
updateAverageRating();
*/