export default class Configuracao {
    constructor({ chave, valor, tipo }) {
        this.chave = chave;
        this.valor = valor;
        this.tipo = tipo || "imagem";
    }
}
