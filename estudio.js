const formulario = document.getElementById("dados");

formulario.addEventListener("submit", function(event) {

    // Impede a página de recarregar
    event.preventDefault();

    // Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const telefone = document.getElementById("telefone").value;

    // Cria os dados
    const dadosUsuario = {
        nome: nome,
        email: email,
        telefone: telefone
    };

    // Salva no navegador
    localStorage.setItem(
        "dadosUsuario",
        JSON.stringify(dadosUsuario)
    );

    // Mensagem
    alert("Dados enviados com sucesso!");

    // Volta para o index
    window.location.href = "index.html";
});
document.addEventListener("click", function(event) {

    const efeito = document.createElement("span");

    efeito.classList.add("efeito-click");

    efeito.style.left = event.clientX + "px";
    efeito.style.top = event.clientY + "px";

    document.body.appendChild(efeito);

    setTimeout(function() {
        efeito.remove();
    }, 600)

});

