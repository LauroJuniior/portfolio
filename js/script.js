
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recependo os valores 
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação 
    if (nome === "" || email === "" || mensagem === "") {
        alert("Erro: Por favor, preencha todos os campos do formulário antes de enviar!");
        return;
    }
    const formatoEmailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formatoEmailValido.test(email)) {
        alert("Erro: Por favor, insira um endereço de e-mail válido (exemplo: usuario@dominio.com).");
        return;
    }

    // alerta de envio da mensagem
    alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

    // Limpeza
    document.getElementById('formContato').reset();
});