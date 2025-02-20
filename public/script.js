let tentativas = 0;
let tentativasTotal = 0;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        const buttonWidth = 120;
        const buttonHeight = 40;
        const isMobile = window.innerWidth <= 768;
        
        // Define as áreas de movimento diferentes para PC e Mobile
        const moveArea = {
            // PC: retângulo horizontal mais largo
            desktop: {
                top: window.innerHeight * 0.2,
                bottom: window.innerHeight * 0.8,
                left: window.innerWidth * 0.1,
                right: window.innerWidth * 0.9
            },
            // Mobile: retângulo vertical mais alto
            mobile: {
                top: window.innerHeight * 0.1,
                bottom: window.innerHeight * 0.9,
                left: window.innerWidth * 0.2,
                right: window.innerWidth * 0.8
            }
        };
        
        const area = isMobile ? moveArea.mobile : moveArea.desktop;
        
        // Decide aleatoriamente qual borda usar (superior, inferior, esquerda ou direita)
        const borders = ['top', 'bottom', 'left', 'right'];
        const selectedBorder = borders[Math.floor(Math.random() * borders.length)];
        
        let novoX, novoY;
        
        switch(selectedBorder) {
            case 'top':
                novoX = Math.random() * (area.right - area.left) + area.left;
                novoY = area.top;
                break;
            case 'bottom':
                novoX = Math.random() * (area.right - area.left) + area.left;
                novoY = area.bottom - buttonHeight;
                break;
            case 'left':
                novoX = area.left;
                novoY = Math.random() * (area.bottom - area.top) + area.top;
                break;
            case 'right':
                novoX = area.right - buttonWidth;
                novoY = Math.random() * (area.bottom - area.top) + area.top;
                break;
        }
        
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