var elem0 = document.getElementById('btnLogin');
elem0.addEventListener('click', function (fLogin) {
    const usuario0 = document.getElementById('usuario').value;
    const password0 = document.getElementById('password').value;
    let usuarioValid = {
        usuarioLog: '',
        passwordLog: '',
        apelidoLog: '',
        selecaoLog: ''
    }

    listaUsuario = JSON.parse(localStorage.getItem('listaUsuario'));
    listaUsuario.forEach((item) => {
        if (usuario0 == item.usuarioCad && password0 == item.passwordCad) {
            usuarioValid = {
                usuarioLog: item.usuarioCad,
                passwordLog: item.passwordCad,
                apelidoLog: item.apelidoCad,
                selecaoLog: item.selecaoCad
            }
        }



    })

    if (usuario0 == usuarioValid.usuarioLog && password0 == usuarioValid.passwordLog) {
        alert("Login efetuado com sucesso");
        alert(usuarioValid.selecaoLog);
        const apelido0 = usuarioValid.apelidoLog;
        localStorage.setItem("apelido0", apelido0);

        if (usuarioValid.selecaoLog == 0) {
            location.href = "homeEmpregador.html";
        }
        if (usuarioValid.selecaoLog == 1) {
            location.href = "homeMotoboy.html";
        }


    } else {
        alert("Nome de usuário e senha não conferem");
    }
}, false);
