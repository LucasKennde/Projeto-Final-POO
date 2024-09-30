import { IEscola } from '../../interfaces/Escola/iEscola';
import { Turma } from '../Turma/Turma';



export class Escola implements IEscola {

    constructor(
        public nome: string,
        public turmas: Turma[] = []) {}

    adicionarTurma(turma: Turma): void {
        const turmaExistente = this.turmas.some(t => t.codigo === turma.codigo);
        if (turmaExistente) {
            throw new Error(`A turma com o código ${turma.codigo} já existe.`);
        }
        this.turmas.push(turma);
    }

    
    removerTurma(codigo: number): void {
        const index = this.turmas.findIndex(turma => turma.codigo === codigo);
        if (index === -1) {
            throw new Error(`Turma com o código ${codigo} não foi encontrada.`);
        }
        this.turmas.splice(index, 1);
    }

    
    listarTurmas(): Turma[] {
        return this.turmas;
    }
}