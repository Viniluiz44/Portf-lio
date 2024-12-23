document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    // Captura os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    // Verifica se todos os campos estão preenchidos
    if (nome && telefone && email && mensagem) {
        // Envia o email usando EmailJS
        emailjs.send("service_l7jwt8h", "template_ol16o7q", {
            nome: nome,
            telefone: telefone,
            email: email,
            mensagem: mensagem
        })
        .then(function(response) {
            console.log("Email enviado com sucesso!", response.status, response.text);
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            console.error("Erro ao enviar email:", error);
            alert("Erro ao enviar a mensagem. Por favor, tente novamente.");
        });
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
