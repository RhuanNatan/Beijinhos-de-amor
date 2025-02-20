let tentativas = 0;
let tentativasTotal = 0;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        const buttonWidth = 120; // Largura fixa do botão
        const buttonHeight = 40; // Altura aproximada do botão
        
        // Define uma área segura fixa para movimento
        const safeArea = {
            width: 280,  // Área segura fixa
            height: 350  // Área segura fixa
        };
        
        // Calcula os limites
        const limits = {
            minX: (window.innerWidth - safeArea.width) / 2,
            maxX: ((window.innerWidth - safeArea.width) / 2) + safeArea.width - buttonWidth,
            minY: (window.innerHeight - safeArea.height) / 2,
            maxY: ((window.innerHeight - safeArea.height) / 2) + safeArea.height - buttonHeight
        };
        
        // Gera posições aleatórias dentro dos limites
        const novoX = Math.random() * (limits.maxX - limits.minX) + limits.minX;
        const novoY = Math.random() * (limits.maxY - limits.minY) + limits.minY;
        
        // Aplica a nova posição
        this.style.position = 'fixed';
        this.style.left = `${novoX}px`;
        this.style.top = `${novoY}px`;
        this.style.transition = 'none';
        
    } else {
        this.style.transition = 'all 0.2s ease';
        this.style.position = 'static';
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