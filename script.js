
const uploadInput = document.getElementById("upload");
const pickButton = document.getElementById("pick-button");
const randomPhoto = document.getElementById("random-photo");

// Load stored photos from localStorage
let photos = JSON.parse(localStorage.getItem("photos")) || [];

// Save photos to localStorage
function savePhotos() {
  localStorage.setItem("photos", JSON.stringify(photos));
}

// Handle file upload
uploadInput.addEventListener("change", (event) => {
  const files = Array.from(event.target.files);
  files.forEach((file) => {
    const reader = new FileReader();
    reader.onload = () => {
      photos.push(reader.result);
      savePhotos();
    };
    reader.readAsDataURL(file);
  });
  event.target.value = ""; // Clear the input
});

// Pick a random photo
pickButton.addEventListener("click", () => {
  if (photos.length === 0) {
    alert("Please upload some photos first!");
    return;
  }
  const randomIndex = Math.floor(Math.random() * photos.length);
  randomPhoto.src = photos[randomIndex];
});
