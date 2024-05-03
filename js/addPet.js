async function addPet(event) {
    event.preventDefault();

    const ownerName = document.getElementById('ownerName').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const state = document.getElementById('state').value;
    const city = document.getElementById('city').value;
    const petName = document.getElementById('petName').value;
    const petAge = document.getElementById('petAge').value;
    const petType = document.getElementById('petType').value;
    const petBreed = document.getElementById('petBreed').value;
    const petGender = document.getElementById('petGender').value;
    const vaccinationStatus = document.getElementById('vaccinationStatus').value;
    const petDescription = document.getElementById('petDescription').value;
    const reason = document.getElementById('reason').value;
    const adoptionOrSale = document.getElementById('adoptionOrSale').value;
    const petPrice = document.getElementById('petPrice').value;
    
    // Example of data validation
    if (!ownerName || !mobileNumber || !state || !city || !petAge || !petType || !petBreed || !petGender || !vaccinationStatus || !petDescription || !reason || !adoptionOrSale) {
        alert('Please fill in all required fields');
        return;
    }

    // Send data to backend for storage
    try {
        const response = await fetch('/submit-pet-data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ownerName,
                mobileNumber,
                state,
                city,
                petName,
                petAge,
                petType,
                petBreed,
                petGender,
                vaccinationStatus,
                petDescription,
                reason,
                adoptionOrSale,
                petPrice
            })
        });

        if (response.ok) {
            alert('Pet added successfully!');
            window.location.href = 'adoptPet.html'; // Redirect to adoptPet.html
            // You may redirect the user to another page if needed
        } else {
            alert('Submission failed. Please try again later.');
        }
    } catch (error) {
        console.error('Error adding pet:', error);
        alert('An unexpected error occurred. Please try again later.');
    }
}


async function fetchPetData() {
    try {
        const response = await fetch('/fetch-pet-data');
        const data = await response.json();
        
        // Check if response is successful
        if (response.ok) {
            // Call function to display the blog posts on the page
            displayPetData(data);
        } else {
            console.error('Failed to fetch pet Data:', data.error);
        }
    } catch (error) {
        console.error('Error fetching pet Data:', error);
    }
}



function displayPetData(pets) {
    const petList = document.getElementById('petList');
    
    // Loop through the pets and create HTML elements to display them
    pets.forEach((pet, index) => {
        // Create a pet container
        const petContainer = document.createElement('div');
        petContainer.classList.add('pet-container');
        
        // Create a pet element
        const petElement = document.createElement('div');
        petElement.classList.add('pet');
        
        // Create an image element for the pet picture
        const pictureElement = document.createElement('img');
        pictureElement.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwMtx1L_vHSuagdepzCVQZde94VbZE_kD7o11TWW2QPpEJos3EnBWrcvMCiG9Gyiijnw4&usqp=CAU';
        pictureElement.alt = 'Pet Picture';
        pictureElement.classList.add('pet-picture');
        
        // Create elements for name, type, breed, gender, city, state, adoption/sale, and buttons
        const nameElement = document.createElement('p');
        nameElement.textContent = `${pet.petName}`;
        nameElement.style.fontWeight = 'bold';
        nameElement.style.fontSize = 'xx-large';
       

        
        // Create a container for type, breed, and gender
        const typeBreedGenderElement = document.createElement('p');
        typeBreedGenderElement.textContent = `${pet.petType},${pet.petBreed},${pet.petGender}`;
        typeBreedGenderElement.style.fontSize = 'x-large';


        const locationElement = document.createElement('p');
        locationElement.textContent = `📌 ${pet.city}, ${pet.state}`;
        locationElement.style.fontSize = 'large';
        
        const adoptionElement = document.createElement('p');
        adoptionElement.textContent = `${pet.adoptionOrSale === 'adoption' ? '🐾Adopt me' : '🐾Buy'} ${pet.petPrice ? '(For ₹' + pet.petPrice + ')' : ''}`;
        adoptionElement.style.fontWeight = 'bold'


        const contactButton = document.createElement('button');
        contactButton.textContent = 'Contact';
        contactButton.classList.add('contact-button');
        contactButton.addEventListener('click', () => {
            // Show popup with owner name and contact number
            alert(`Owner Name: ${pet.ownerName}\nContact Number: ${pet.mobileNumber}`);
        });

        const detailsButton = document.createElement('button');
        detailsButton.textContent = 'Details';
        detailsButton.classList.add('details-button');
        detailsButton.addEventListener('click', () => {
            // Show details popup
            alert(`Age: ${pet.petAge} months\nVaccination Status: ${pet.vaccinationStatus}\nDescription: ${pet.petDescription}\nReason: ${pet.reason}`);
        });

        // Create a container for the "Get Pet" button
        const getPetButtonContainer = document.createElement('div');
        getPetButtonContainer.classList.add('get-pet-button-container');

        const getPetButton = document.createElement('button');
        getPetButton.textContent = 'Get Pet';
        getPetButton.classList.add('get-pet-button');
        getPetButton.addEventListener('click', () => {
            // Show welcome popup
            alert('Welcome to the family, we will contact you soon.');
        });

        // Append elements to the pet
        petElement.appendChild(pictureElement);
        petElement.appendChild(nameElement);
        petElement.appendChild(typeBreedGenderElement); // Append type, breed, and gender container
        petElement.appendChild(locationElement);
        petElement.appendChild(adoptionElement);
        petElement.appendChild(contactButton);
        petElement.appendChild(detailsButton);

        // Append the "Get Pet" button to its container
        getPetButtonContainer.appendChild(getPetButton);

        // Append the pet and the "Get Pet" button container to the pet container
        petContainer.appendChild(petElement);
        petContainer.appendChild(getPetButtonContainer);

        // Append the container to the pet list
        petList.appendChild(petContainer);

        // Apply styles to the pet container based on index
        if ((index + 1) % 4 === 0) {
            // Add a clear fix for every fourth pet to start a new row
            petContainer.classList.add('clear-fix');
        }
    });
}

// Call fetchPetData when the page loads
window.onload = fetchPetData;




function toggleChat() {
    var chatBox = document.getElementById('chat-box');
    chatBox.classList.toggle('hidden');
  }
  
  