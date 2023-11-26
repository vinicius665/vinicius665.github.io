function pesquisarMotoboy() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var motoboys = document.getElementsByClassName("motoboy");

    for (var i = 0; i < motoboys.length; i++) {
        var nomeMotoboy = motoboys[i].getElementsByTagName("p")[1].textContent.toLowerCase();
        if (nomeMotoboy.includes(searchTerm)) {
            motoboys[i].style.display = "flex"; // Exibir a div usando "flex"
        } else {
            motoboys[i].style.display = "none"; // Ocultar a div usando "none"
        }
    }
}
var stars = document.querySelectorAll('.star-icon');
var ratings = []; // Um array para armazenar as classificações de cada div

document.addEventListener('click', function (e) {
  var classStar = e.target.classList;
  if (!classStar.contains('ativo')) {
    var rating = parseInt(e.target.getAttribute('data-avaliacao'));
    var divIndex = Array.from(e.target.parentElement.children).indexOf(e.target);

    // Remova a classe 'ativo' de todas as estrelas na mesma div
    Array.from(e.target.parentElement.children).forEach(function (star) {
      star.classList.remove('ativo');
    });

    // Adicione a classe 'ativo' à estrela clicada
    classStar.add('ativo');

    // Atualize a classificação para a div correspondente no array de classificações
    ratings[divIndex] = rating;

    console.log('Classificação da div ' + divIndex + ': ' + ratings[divIndex]);
  }
});