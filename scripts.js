// Seleciona o elemento com a classe "mascara-form" e armazena em uma variável chamada masc
const masc = document.querySelector(".mascara-form");

// Seleciona o elemento com a classe "form-fale-conosco" e armazena em uma variável chamada form
const form = document.querySelector(".form-fale-conosco");

// Função para mostrar o formulário
function mostrarForm() {
    // Define a posição horizontal do formulário para o meio da tela (50%)
    form.style.left = "50%";
    // Move o formulário para a esquerda para centralizá-lo corretamente
    form.style.transform = "translateX(-50%)";
    // Torna a máscara do formulário visível
    masc.style.visibility = "visible";
}

// Função para fechar o formulário
function fecharForm() {
    // Move o formulário para fora da tela (à esquerda) para escondê-lo
    form.style.left = "-310px"; // -310px é uma quantidade arbitrária para esconder totalmente o formulário
    // Retorna o formulário à sua posição original (sem translação)
    form.style.transform = "translateX(0)";
    // Torna a máscara do formulário invisível
    masc.style.visibility = "hidden";
}
