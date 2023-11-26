var elem1 = document.getElementById('btnCadastro');
elem1.addEventListener('click', function (fCadastro) {
    const usuario1 = document.getElementById('e-mail-cadastro').value;
    const password1 = document.getElementById('senha-cadastro').value;
    const conferepassword1 = document.getElementById('confere-senha-cadastro').value;


    if (usuario1 == "" || password1 == "" || conferepassword1 == "") {
        alert("Os campos e-mail e senha são obrigatórios");
    }
    if (conferepassword1 != password1) {
        alert("As senhas não conferem");
    }

    if (usuario1 != "" && password1 == conferepassword1) {

        let listaUsuario = JSON.parse(localStorage.getItem('listaUsuario') || '[]');

        if (listaUsuario.some(item => item.usuarioCad === usuario1)) {
            alert("Erro: usuário já cadastrado");
        }
        else {
            listaUsuario.push(
                {
                    usuarioCad: document.getElementById('e-mail-cadastro').value,
                    passwordCad: document.getElementById('senha-cadastro').value,
                    apelidoCad: document.getElementById('apelido').value,
                    selecaoCad: document.querySelector('input[name="tipo"]:checked').value 
                });


            alert("Cadastro efetuado com sucesso");
            localStorage.setItem('listaUsuario', JSON.stringify(listaUsuario));

            location.href = "login.html";

        }
    }


}, false);
