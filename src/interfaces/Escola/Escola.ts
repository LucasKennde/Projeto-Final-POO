import { Turma } from "../../entities/Turma/Turma";

export interface IEscola {
    
    nome: string,
    turmas: Turma[]
    
    adicionarTurma(turma: Turma): void;
    removerTurma(codigo: number): void;
    listarTurmas(): Turma[];
}
