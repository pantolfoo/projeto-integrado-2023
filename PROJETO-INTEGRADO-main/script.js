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

function Mudarestado(el,il,bel,bil) {
        document.getElementById(el).style.display = 'block';
        document.getElementById(il).style.display = 'none';
        document.getElementById(bel).style.backgroundColor = "#ff0000";
        document.getElementById(bel).style.color = "#ffffff";
        document.getElementById(bel).style.borderColor = "#ff0000";
        document.getElementById(bil).style.backgroundColor = "#ffffff";
        document.getElementById(bil).style.color = "#ff0000";
        document.getElementById(bil).style.borderColor = "#ffffff";
}

function Mudarestado2(el,il,bil,bel) {
    document.getElementById(il).style.display = 'block';
    document.getElementById(el).style.display = 'none';
    document.getElementById(bel).style.backgroundColor = "#ff0000";
    document.getElementById(bel).style.color = "#ffffff";
    document.getElementById(bel).style.borderColor = "#ff0000";
    document.getElementById(bil).style.backgroundColor = "#ffffff";
    document.getElementById(bil).style.color = "#ff0000";
    document.getElementById(bil).style.borderColor = "#ffffff";
}