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
    var newLastName = document.getElementById("lastNameInput").value;
    var newBiography = document.getElementById("biographyTextArea").value;

    
    document.querySelector(".profile-name").textContent = newFirstName + " " + newLastName;
    document.querySelector(".profile-biography").textContent = newBiography;

  
    closeEditModal();
    
     var currentRating = 0;

    
     function rateProfile(rating) {
         currentRating = rating;

        
         var starIcons = document.querySelectorAll('.star-icon');
         for (var i = 0; i < 5; i++) {
             if (i < rating) {
                 starIcons[i].style.color = '#FFD700'; // Amarelo para estrelas classificadas
             } else {
                 starIcons[i].style.color = '#ccc'; // Cinza para estrelas não classificadas
             }
         }
     }
}


let ultimaEntrega = "Nenhuma";

// Função para atualizar o histórico de entregas
function atualizarHistoricoEntregas() {
    numeroEntregas++;
    ultimaEntrega = "Entrega #" + numeroEntregas; 

   
    document.getElementById("total-entregas").textContent = numeroEntregas;
    document.getElementById("ultima-entrega").textContent = ultimaEntrega;
}


atualizarHistoricoEntregas(); 



