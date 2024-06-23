//Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
alert("Boas vindas ao nosso site!");

//Declare uma variável chamada nome e atribua a ela o valor "Lua".

let nome = 'lua';

//Crie uma variável chamada idade e atribua a ela o valor 25.

let idade = 25;

//Defina uma variável numeroDeVendas e atribua a ela o valor 50.
let numeroDeVendas = 50;

//Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
let saldoDisponivel = 1000;

//Exiba um alerta com o texto "Erro! Preencha todos os campos"
alert('Erro! Preencha todos os campos');

//Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

//Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
nome = prompt('Qual é o seu nome?');

//Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
idade = parseInt(prompt('Qual é a sua idade?'));

//Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".

if(idade>=18){
    alert('Já pode tirar a habilitação.');
}

//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let dia = prompet('Qual o dia da semana?');
if(dia === 'Sábado' || dia === 'Domingo'){
    alert('Bom fim de semana!');
}
else{
    alert('Boa semana!');
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = parseInt(prompet('Digite o número'));
if(numero > 0){
    alert('Positivo');
}
else{ alert('Negativo');}


//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar."
pontuacao = parseInt(prompt('Pontuação:'));
if(pontuacao>=100){
    console.log('Parabéns, você ganhou!');
}
else{
    console.log('Tente novamente!');
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let regina = 'regina';
let saldo = 15;
let mensagemRegina =`jOlá ${regina}, seu saldo atual é:${saldo}`;
console.log(mensagemRegina); 

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
nomeUser = prompet('Digite seu nome:');
alert(`Bem-vindo(a) ${nomeUser}!`);