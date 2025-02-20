let tentativas = 0;
let rodada = 1;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        const maxX = window.innerWidth - this.offsetWidth;
        const maxY = window.innerHeight - this.offsetHeight;
        
        const novoX = Math.random() * maxX;
        const novoY = Math.random() * maxY;
        
        this.style.position = 'fixed';
        this.style.left = novoX + 'px';
        this.style.top = novoY + 'px';
    } else if (rodada === 1) {
        document.getElementById('simBtn').style.display = 'none';
        document.getElementById('naoBtn').style.display = 'none';
        document.getElementById('falhaBtn').style.display = 'block';
        document.getElementById('falhaBtn').textContent = 'Falha no teste, tente de novo';
    } else {
        document.getElementById('simBtn').style.display = 'none';
        document.getElementById('naoBtn').style.display = 'none';
        document.getElementById('mensagem').textContent = 'Você ganhou um vale beijinho de 5 anos, para me beijar quando quiser ❤️';
    }
});

document.getElementById('naoBtn').addEventListener('click', function() {
    document.getElementById('mensagem').textContent = 'QUER SIMMM!!!';
    this.style.display = 'none';
    document.getElementById('simBtn').style.display = 'none';
    document.getElementById('tentarNovamente').style.display = 'block';
});

document.getElementById('tentarNovamente').addEventListener('click', function() {
    resetarJogo();
});

document.getElementById('falhaBtn').addEventListener('click', function() {
    rodada = 2;
    resetarJogo();
});

function resetarJogo() {
    tentativas = 0;
    document.getElementById('simBtn').style.display = 'inline-block';
    document.getElementById('simBtn').style.position = 'static';
    document.getElementById('naoBtn').style.display = 'inline-block';
    document.getElementById('tentarNovamente').style.display = 'none';
    document.getElementById('falhaBtn').style.display = 'none';
    document.getElementById('mensagem').textContent = '';
} 