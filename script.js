// class Pessoa{
//     constructor(nome,idade,cidade){
//     this.nome = nome;
//     this.idade = idade;
//     this.cidade = cidade;
//     }
//     dizerOla(){
//         console.log(`Oi, meu nome é: ${this.nome}, minha idade: ${this.idade}`);

//     }

// }
// const pessoa2 = new Pessoa ("bino", 19, "são paulo");
// pessoa2.dizerOla();

// class aluno {
//     constructor (nome, idade, matricula){
//     this.nome = nome;
//     this.matricula = matricula;
//     this.idade = idade;
//     }

// info(){
//     console.log(`Oi, sou o aluno: ${this.nome}, minha idade é: ${this.idade}, e minha matrícula é: ${this.matricula}`);
// }
// }

// const aluno2 = new aluno ("junior", 24, "193248354");
// aluno2.info();

class Animal{
    constructor (nome, idade, NPata){
        this.nome = nome;
        this.NPata = NPata;
        this.idade = idade;
    }
    emitirSom(){
        console.log ("Som");
    }


}
class Cachorro extends Animal {
    constructor(idade, Npata, nome, raca){
        super(nome,Npata, idade);
        this.raca = raca;
        

    }
    emitirSom(){
        console.log("Au Au");
    }
}
const cachorro = new Cachorro ("rex", 12, 4, "caramelo");
cachorro.emitirSom();

class Pessoa{
    constructor(nome,idade,cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
    }
    info(){
        console.log(`${this.nome},${this.idade},${this.cpf}`);
    }
}
class Aluno extends Pessoa {
    constructor(nome,idade,cpf,matricula){
    super(nome,idade,cpf);
    this.matricula = matricula;
    }

info(){
    super.info();
    super.falar();
    console.log(`${this.matricula}`);
}}
const aluno1 = new Aluno ("marcos",34,"1295883348","13924234828");
aluno1.info();
aluno1.falar();