//functionality for playing sounds, rotating images in a slideshow, handling button clicks for reporting injuries, redirecting users to various pages related to pet services, adoption, shopping, and blogging.

//play sounds on icon
function playRandomSound() {
    var randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    var audio = document.getElementById("pawSound" + randomNumber);
    audio.play();
  }


  //images on slider
  var images = ["https://wallpapers.com/images/featured-small/dog-wj7msvc5kj9v6cyy.webp", 
  "https://wallpapers.com/images/high/cute-tabby-cat-eyes-818wlnpoe0l1dnoi.webp",
  "https://wallpapers.com/images/high/cute-hamster-pictures-aubi50zskkmq7n25.webp",
  "https://wallpapers.com/images/hd/lovely-blue-bird-zo3853h1fx99ktpy.webp",
  "https://wallpapers.com/images/hd/golden-dog-chasing-bubbles-yhj9wu70jj7j4mwj.webp",
  "https://wallpapers.com/images/high/cute-funny-cat-pictures-iaymsb7z4q5i4g9t.webp",
  "https://wallpapers.com/images/high/cute-hamster-pictures-h15yvvyrvg3sshr8.webp",
  "https://wallpapers.com/images/hd/cute-yellow-bird-aypbiol2abdzg5ns.webp",
   "https://wallpapers.com/images/high/sleeping-dog-covered-with-a-nice-blanket-u5ae0kfuv51kpoi1.webp", 
   "https://wallpapers.com/images/high/cute-funny-cat-pictures-bmx91yeuqfstso99.webp",
   "https://wallpapers.com/images/high/cute-hamster-pictures-cjzn6ghibj08dtdt.webp",
   "https://wallpapers.com/images/hd/yellow-bird-and-berries-uc58xhbjiaied8bt.webp",
   "https://wallpapers.com/images/high/sleeping-husky-puppy-dmyt71ffdk9zqqp3.webp",
  "https://wallpapers.com/images/high/pet-cat-in-swing-0cxo95mf4mc241nk.webp",
  "https://wallpapers.com/images/high/full-4k-desktop-cute-hamster-cjcozj0qdqofzx9a.webp",
  "https://wallpapers.com/images/hd/bird-in-white-flowers-z3iprf6mvagacyed.webp"];
  var currentIndex = 0;
  var carouselImage = document.getElementById("carouselImage");
  function rotateImages() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
  }
  setInterval(rotateImages, 3000);


   // Select the "Report an Injury" button
   var reportButton = document.querySelector('.button-row .circle-button:nth-child(3)'); 
   reportButton.addEventListener('click', function() {
       // Display a popup message with the phone number
       alert("Call us at +91-xxxxx xxxxx our rescue team will be reaching soon!");
       console.log("Button clicked!");
   });
  
   //grooming and houses services
   function redirectToGroomingPage() {
     window.location.href = "petGroom.html";
 }
 function redirectToPetHouse() {
  window.location.href = "petHouse.html";
}

//function for adopt---availablepets
function redirectToAdoptPet() {
  window.location.href = "adoptPet.html";
}

function redirectToShopping() {
  window.location.href = "shopping.html";
}



//function for bloging
function redirectToBloging() {
  window.location.href = "blog.html";
}

function toggleChat() {
  var chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('hidden');
}


function playSound() {
  var audio = document.getElementById("../sound/cart.m4a");
  audio.play();
}
