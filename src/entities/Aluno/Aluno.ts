
import { TipoEnsino, Classificacao } from "../../types/types";
import { IAluno } from "../../interfaces/Aluno/iAluno";
import { Turma } from "../Turma/Turma";

export class Aluno implements IAluno {
    public static alunosRegistrados: String[] = [];

    constructor(
        private _nome: string,
        private _sobrenome: string,
        private _email: string,
        private _tipo: TipoEnsino,
        private readonly _turma: Turma,
        private _nascimento: Date,
        private _notas: number[] = [],
        private _ativo: boolean = true,
        private _classificacao: Classificacao
    ) {
        if (Aluno.alunosRegistrados.includes(_email)) {
            throw new Error('Aluno com este email já existe');
        }
        if (this.idade < 16) {
            throw new Error('Aluno deve ter pelo menos 16 anos');
        }
        Aluno.alunosRegistrados.push(_email);
    }

    get nome(): string {
        return this._nome;
    }
    set nome(nome: string) {
        if (nome.length < 3) {
            throw new Error('Nome deve ter pelo menos 3 caracteres');
        }
        this._nome = nome;
    }

    get sobrenome(): string {
        return this._sobrenome;
    }

    set sobrenome(sobrenome: string) {
        if (sobrenome.length < 3) {
            throw new Error('Sobrenome deve ter pelo menos 3 caracteres');
        }
        this._sobrenome = sobrenome;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        if (email.length < 3) {
            throw new Error('Email deve ter pelo menos 3 caracteres');
        }
        if (Aluno.alunosRegistrados.includes(email)) {
            throw new Error('Aluno com este email já existe');
        }
        this._email = email;
    }

    get tipo(): TipoEnsino {
        return this._tipo;
    }
    set tipo(tipo: TipoEnsino) {
        this._tipo = tipo;
    }

    get turma(): Turma {
        return this._turma;
    }

    get ativo(): boolean {
        return this._ativo;
    }
    
    get classificacao(): Classificacao {
        return this._classificacao;
    }

    set classificacao(classificacao: Classificacao) {
        this._classificacao = classificacao;
    }
    get nascimento(): Date {
        return this._nascimento
    }
    set nascimento(nascimento: Date) {
        if (nascimento > new Date()) {
            throw new Error('Data de nascimento não pode ser no futuro');
        }
        this._nascimento = nascimento;
    }
    get notas(): number[] {
        return this._notas
    }
    
    set notas(notas: number[]) {
        if (notas.length < 2) {
            throw new Error('Aluno deve ter pelo menos 2 notas');
        }
        this._notas = notas;
    }

    get idade(): number {
        const hoje = new Date();
        let idadeAluno = hoje.getFullYear() - this._nascimento.getFullYear();
        const m = hoje.getMonth() - this._nascimento.getMonth();
        if (m < 0 || (m === 0 && hoje.getDate() < this._nascimento.getDate())) {
            idadeAluno--;
        }
        return idadeAluno;
    }

    calcularMedia(): number {
        if (this._notas.length === 0) return 0;
        const media = this._notas.reduce((sum, nota) => sum + nota, 0) / this._notas.length
        return media;
    }


    desativar() {
        this._ativo = false;
    }

    ativar() {
        this._ativo = true;
    }
}
