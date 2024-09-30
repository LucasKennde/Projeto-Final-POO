import { ITurma } from '../Turma/iTurma';

export type TipoEnsino = 'presencial' | 'ead';
export type Classificacao = 'A' | 'B' | 'C' | 'D';

export interface IAluno {
    nome: string;
    sobrenome: string;
    email: string;
    tipo: TipoEnsino;
    turma: ITurma;
    nascimento: Date;
    notas: number[];
    ativo: boolean;
    classificacao: Classificacao;

    calcularMedia(): number;
    desativar(): void;
    ativar(): void;
}
