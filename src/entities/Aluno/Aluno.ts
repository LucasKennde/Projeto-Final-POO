type TipoEnsino = 'presencial' | 'ead';
type Classificacao = 'A' | 'B' | 'C' | 'D';
import { Turma } from "../Turma/Turma";

export class Aluno {
    private static alunosRegistrados: String[] = [];

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
        if (this.Idade() < 16) {
            throw new Error('Aluno deve ter pelo menos 16 anos');
        }
        Aluno.alunosRegistrados.push(_email);
    }

    get nome():string{
        return this._nome;
    }
    get sobrenome():string{
        return this._sobrenome;
    }
    get email():string{
        return this._email;
    }
    get tipo(): TipoEnsino{
        return this._tipo;
    }
    get turma(): Turma{
        return this._turma;
    }
    get ativo(): boolean{
        return this._ativo;
    }
    get classificacao(): Classificacao{
        return this._classificacao;
    }


    Idade(): number {
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
        return this._notas.reduce((sum, nota) => sum + nota, 0) / this._notas.length;
    }


    desativar() {
        this._ativo = false;
    }

    ativar() {
        this._ativo = true;
    }
}