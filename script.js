const imagem1 = document.querySelector('#imagem1');
const imagem2 = document.querySelector('#imagem2');
const imagem3 = document.querySelector('#imagem3');
const imagem4 = document.querySelector('#imagem4');
const nome1 = document.querySelector('#nome1');
const nome2 = document.querySelector('#nome2');
const nome3 = document.querySelector('#nome3');
const nome4 = document.querySelector('#nome4');
const botao1 = document.querySelector('#botao1');
const botao2 = document.querySelector('#botao2');
const introducao = document.querySelector('.introducao');
const principal = document.querySelector('.principal');


gerarValorAleatorio1 = () => {
    return Math.floor((Math.random() * 671)+1);
}

gerarValorAleatorio2 = () => {
    return Math.floor((Math.random() * 671)+1);
}

gerarValorAleatorio3 = () => {
    return Math.floor((Math.random() * 671)+1);
}

gerarValorAleatorio4 = () => {
    return Math.floor((Math.random() * 671)+1);
}


pegarPersonagem1 = () => {
    let numeroAleatorio1 = gerarValorAleatorio1();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio1}`, {
        method:'GET', 
        headers: {
            Accept: 'application/jason',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1 = data.name;
        nome1.innerHTML = data.name; 
    });
}

pegarPersonagem2 = () => {
    let numeroAleatorio2 = gerarValorAleatorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
        method:'GET', 
        headers: {
            Accept: 'application/jason',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2 = data.name;
        nome2.innerHTML = data.name;
    });
}

pegarPersonagem3 = () => {
    let numeroAleatorio3 = gerarValorAleatorio3();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio3}`, {
        method:'GET', 
        headers: {
            Accept: 'application/jason',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3 = data.name;
        nome3.innerHTML = data.name;
    });
}

pegarPersonagem4 = () => {
    let numeroAleatorio4 = gerarValorAleatorio4();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio4}`, {
        method:'GET', 
        headers: {
            Accept: 'application/jason',
            "content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem4.src = data.image;
        imagem4.alt = data.name;
        nomeDoPersonagem4 = data.name;
        nome4.innerHTML = data.name;
    });
}

botao1.onclick = () => {
    introducao.style.display = 'none';
    principal.style.display = 'flex';
    pegarPersonagem1(); pegarPersonagem2(); pegarPersonagem3(); pegarPersonagem4();
}

botao2.onclick = () => {pegarPersonagem1(); pegarPersonagem2(); pegarPersonagem3(); pegarPersonagem4();}

