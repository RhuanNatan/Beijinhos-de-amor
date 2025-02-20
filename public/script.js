let tentativas = 0;
let tentativasTotal = 0;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        // Obtém as dimensões do botão
        const buttonWidth = this.offsetWidth;
        const buttonHeight = this.offsetHeight;
        
        // Calcula os limites máximos considerando o tamanho do botão
        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;
        
        // Gera posições aleatórias dentro dos limites seguros
        const novoX = Math.random() * (maxX - 20); // -20 para margem extra
        const novoY = Math.random() * (maxY - 20);
        
        this.style.position = 'fixed';
        this.style.left = novoX + 'px';
        this.style.top = novoY + 'px';
        
        this.classList.add('moving');
    } else {
        this.classList.remove('moving');
        document.getElementById('simBtn').style.display = 'none';
        document.getElementById('naoBtn').style.display = 'none';
        document.getElementById('falhaBtn').style.display = 'block';
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
    tentativasTotal++;
    if (tentativasTotal < 2) {
        document.getElementById('mensagem').textContent = 'Vamos tentar mais uma vez!';
        resetarJogo();
    } else {
        document.getElementById('mensagem').textContent = 'Brincadeiraaa vc acabou de ganhar um vale beijinhoo de 5 anos, para me beijar quando quiser';
        this.style.display = 'none';
    }
});

function resetarJogo() {
    tentativas = 0;
    document.getElementById('simBtn').style.display = 'inline';
    document.getElementById('simBtn').style.position = 'static';
    document.getElementById('naoBtn').style.display = 'inline';
    document.getElementById('tentarNovamente').style.display = 'none';
    document.getElementById('falhaBtn').style.display = 'none';
    document.getElementById('mensagem').textContent = '';
} 