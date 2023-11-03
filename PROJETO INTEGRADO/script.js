function redirecionarProximaPagina() // Função para redirecionar para a próxima página
{
    window.location.href = 'cardapio.html';// Redireciona para a pagina_seguinte.html
}

function redirecionarCardapio()
{
    window.location.href= 'home.html';
}

document.getElementById('login-button').addEventListener('click', redirecionarProximaPagina);
// Adicione um ouvinte de evento ao botão de login

