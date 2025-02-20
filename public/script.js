let tentativas = 0;
let tentativasTotal = 0;

document.getElementById('simBtn').addEventListener('click', function(e) {
    tentativas++;
    
    if (tentativas < 5) {
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Movimento mais controlado para celular
            const range = 100; // área de movimento reduzida
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            
            const novoX = centerX + (Math.random() * range - range/2);
            const novoY = centerY + (Math.random() * range - range/2);
            
            // Garante que o botão não saia da tela
            const finalX = Math.min(Math.max(novoX, 50), window.innerWidth - 50);
            const finalY = Math.min(Math.max(novoY, 50), window.innerHeight - 50);
            
            this.style.position = 'fixed';
            this.style.left = finalX + 'px';
            this.style.top = finalY + 'px';
        } else {
            // Comportamento original para desktop
            const maxX = window.innerWidth - this.offsetWidth - 100;
            const maxY = window.innerHeight - this.offsetHeight - 100;
            
            const novoX = Math.random() * maxX + 50;
            const novoY = Math.random() * maxY + 50;
            
            this.style.position = 'fixed';
            this.style.left = novoX + 'px';
            this.style.top = novoY + 'px';
        }
        
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