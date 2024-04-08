// Objetivo 1 = quando o usuário clic no botão de mostrar mais deve abrir os projetos que estão escondidos no html
// Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele
const btn = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
btn.addEventListener('click', () => {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');


        // Esconder o botão de mostrar mais
        btn.classList.add("remover");
        });
});

