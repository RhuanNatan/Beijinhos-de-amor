let tentativas = 0;
let tentativasTotal = 0;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        // Obtém as dimensões do botão e da área visível
        const buttonWidth = this.offsetWidth;
        const buttonHeight = this.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        
        // Define uma área segura (80% do centro da tela)
        const safeAreaWidth = viewportWidth * 0.8;
        const safeAreaHeight = viewportHeight * 0.8;
        
        // Calcula os limites para manter o botão na área segura
        const minX = (viewportWidth - safeAreaWidth) / 2;
        const maxX = viewportWidth - buttonWidth - minX;
        const minY = (viewportHeight - safeAreaHeight) / 2;
        const maxY = viewportHeight - buttonHeight - minY;
        
        // Gera posições aleatórias dentro da área segura
        const novoX = Math.random() * (maxX - minX) + minX;
        const novoY = Math.random() * (maxY - minY) + minY;
        
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