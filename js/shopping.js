/////play sounds on icon
function playRandomSound() {
  var randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
  var audio = document.getElementById("pawSound" + randomNumber);
  audio.play();
}

function playSound() {
  var audio = document.getElementById("./sound/cart.m4a");
  audio.play();
}

//images on slider
var images = ["https://media.istockphoto.com/id/1341957270/photo/food-and-accessories-for-the-dog-and-chihuahua-on-table.webp?b=1&s=170667a&w=0&k=20&c=rKX9x0b4yAIz2AiJnjHd9BKRMPrgp8XE9KrHZsYnDhw=", 
"https://media.istockphoto.com/id/1131841641/photo/dry-pet-food.jpg?s=612x612&w=0&k=20&c=zNKlNVZ-gCYC-b6VUjfrardCC0bYkfPk-C3qlnFxfts=",
"https://seekersguidance.org/wp-content/uploads/2022/03/Pet-Store-Dog-Accessories-Shutterstock-e1646644579953.jpg",
 "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2F3e32e76b5134a4bb56e7ca4802741e59e9cbb9b9-2560x1440.jpg%3Fq%3D95%26fit%3Dmax%26auto%3Dformat&w=3840&q=95",
 "https://www.petsnaturallytc.com/wp-content/uploads/2023/01/pet-accessories-1.jpg",
 "https://en-chatelaine.mblycdn.com/ench/resized/2021/10/1600x900/made-in-canada-pet-accessories-1280x720.jpg",
 "https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647566246/singularity-migrated-images/household-items-toxic-to-pets-via-magazine-shutterstock_1365490955.jpg.jpg",
"https://dailymom.com/portal/wp-content/uploads/2023/06/daily-mom-parent-portal-CATIT.jpg",
"https://idme-marketplace.s3.amazonaws.com/o4bi2z02hel1tnw844vysmc2cykr",
"https://st.depositphotos.com/16122460/61595/i/450/depositphotos_615951796-stock-photo-flat-lay-composition-dog-collar.jpgs"];
var currentIndex = 0;
var carouselImage = document.getElementById("carouselImage");
function rotateImages() {
  currentIndex = (currentIndex + 1) % images.length;
  carouselImage.src = images[currentIndex];
}
setInterval(rotateImages, 3000);


 // Select the "Report an Injury" button
 var reportButton = document.querySelector('.button-row .circle-button:nth-child(3)'); // Assuming it's the third button in the row
 // Add a click event listener to the button
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








//play sounds on icon
function playRandomSound() {
    var randomNumber = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 and 3
    var audio = document.getElementById("pawSound" + randomNumber);
    audio.play();
  }


  //images on slider
  var images = ["https://media.istockphoto.com/id/1341957270/photo/food-and-accessories-for-the-dog-and-chihuahua-on-table.webp?b=1&s=170667a&w=0&k=20&c=rKX9x0b4yAIz2AiJnjHd9BKRMPrgp8XE9KrHZsYnDhw=", 
  "https://media.istockphoto.com/id/1131841641/photo/dry-pet-food.jpg?s=612x612&w=0&k=20&c=zNKlNVZ-gCYC-b6VUjfrardCC0bYkfPk-C3qlnFxfts=",
  "https://seekersguidance.org/wp-content/uploads/2022/03/Pet-Store-Dog-Accessories-Shutterstock-e1646644579953.jpg",
   "https://jingdaily.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ff8lauh0h%2Fproduction%2F3e32e76b5134a4bb56e7ca4802741e59e9cbb9b9-2560x1440.jpg%3Fq%3D95%26fit%3Dmax%26auto%3Dformat&w=3840&q=95",
   "https://www.petsnaturallytc.com/wp-content/uploads/2023/01/pet-accessories-1.jpg",
   "https://en-chatelaine.mblycdn.com/ench/resized/2021/10/1600x900/made-in-canada-pet-accessories-1280x720.jpg",
   "https://assets.goaaa.com/image/upload/c_fill,g_auto,w_1170,h_593,q_auto:best/v1647566246/singularity-migrated-images/household-items-toxic-to-pets-via-magazine-shutterstock_1365490955.jpg.jpg",
  "https://dailymom.com/portal/wp-content/uploads/2023/06/daily-mom-parent-portal-CATIT.jpg",
  "https://idme-marketplace.s3.amazonaws.com/o4bi2z02hel1tnw844vysmc2cykr",
  "https://st.depositphotos.com/16122460/61595/i/450/depositphotos_615951796-stock-photo-flat-lay-composition-dog-collar.jpgs"];
  var currentIndex = 0;
  var carouselImage = document.getElementById("carouselImage");
  function rotateImages() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImage.src = images[currentIndex];
  }
  setInterval(rotateImages, 3000);


   // Select the "Report an Injury" button
   var reportButton = document.querySelector('.button-row .circle-button:nth-child(3)'); // Assuming it's the third button in the row
   // Add a click event listener to the button
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

function toggleChat() {
  var chatBox = document.getElementById('chat-box');
  chatBox.classList.toggle('hidden');
}






