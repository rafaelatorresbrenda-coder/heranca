import { Usuario } from "./Usuario.js";

export class Logista extends Usuario {
    razao_social;
    cnpj;
    constructor(id, email, senha, razao_social, cnpj){
        //executa o construtor pai
        super(id, email, senha)
        this.razao_social = razao_social;
        this.cnpj = cnpj;
    }
    infoLogista(){
        console.log("==========================")
        console.log("Razão Social: "+ this.razao_social);
        console.log("Email: "+ this.email);
        console.log("==========================")
    }
}