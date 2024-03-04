class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    tipoDoAtaque() {
        if (this.tipo === "mago") { 
            return "usou magia";
        } else if (this.tipo === "guerreiro") { 
            return "usou espada";
        } else if (this.tipo === "monge") { 
            return "artes marciais";
        } else if (this.tipo === "ninja") { 
            return "shuriken";
        }    
    }

    atacar() {
        console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${this.tipoDoAtaque()}`);
    }
}

const heroi1 = new Heroi("Julio", 31, "ninja");
heroi1.atacar();