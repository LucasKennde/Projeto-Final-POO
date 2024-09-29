import { Turma } from '../Turma/Turma';

export class Escola {
    public nome: string;
    private turmas: Turma[] = [];

   
    constructor(nome: string, turmas: Turma[] = []) {
        this.nome = nome;
        this.turmas = turmas;
    }

    
    public adicionarTurma(turma: Turma): void {
        const turmaExistente = this.turmas.some(t => t.codigo === turma.codigo);
        if (turmaExistente) {
            throw new Error(`A turma com o código ${turma.codigo} já existe.`);
        }
        this.turmas.push(turma);
    }

    
    public removerTurma(codigo: number): void {
        const index = this.turmas.findIndex(turma => turma.codigo === codigo);
        if (index === -1) {
            throw new Error(`Turma com o código ${codigo} não foi encontrada.`);
        }
        this.turmas.splice(index, 1);
    }

    
    public listarTurmas(): Turma[] {
        return this.turmas;
    }
}
