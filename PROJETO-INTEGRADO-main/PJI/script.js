function redirecionarProximaPagina() // Função para redirecionar para a próxima página
{
    window.location.href = 'pagina_seguinte.html';// Redireciona para a pagina_seguinte.html
}

document.getElementById('login-button').addEventListener('click', redirecionarProximaPagina);// Adicione um ouvinte de evento ao botão de login

