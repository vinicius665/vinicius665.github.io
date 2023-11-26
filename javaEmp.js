function openEditModal() {
    var modal = document.getElementById("editModal");
    modal.style.display = "block";
    
 
    var name = document.querySelector(".profile-name").textContent.split(" ");
    document.getElementById("firstNameInput").value = name[0];
    document.getElementById("lastNameInput").value = name[1];
    document.getElementById("biographyTextArea").value = document.querySelector(".profile-biography").textContent;
}

function closeEditModal() {
    var modal = document.getElementById("editModal");
    modal.style.display = "none";
}

function saveProfileInfo() {
    var newFirstName = document.getElementById("firstNameInput").value;
   
    var newBiography = document.getElementById("biographyTextArea").value;

    
    document.querySelector(".profile-name").textContent = newFirstName  
    document.querySelector(".profile-biography").textContent = newBiography;

  
    closeEditModal();
    
     var currentRating = 0;

    
     function rateProfile(rating) {
         currentRating = rating;

        
         var starIcons = document.querySelectorAll('.star-icon');
         for (var i = 0; i < 5; i++) {
             if (i < rating) {
                 starIcons[i].style.color = '#FFD700'; 
             } else {
                 starIcons[i].style.color = '#ccc';
             }
         }
     }
}