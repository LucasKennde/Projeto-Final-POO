import { Aluno } from '../../entities/Aluno/Aluno';
import { TipoEnsino } from '../Aluno/iAluno';

export interface ITurma {
    codigo: number;
    maximo: number;
    descricao: string;
    tipo: TipoEnsino;
    alunos: Aluno[];

    adicionarAluno(aluno: Aluno): void;
    removerAluno(email: string): void;
}
