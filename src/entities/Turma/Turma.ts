import { TipoEnsino } from "../../types/types";
import { ITurma } from "../../interfaces/Turma/iTurma";
import { Aluno } from "../Aluno/Aluno";


export class Turma implements ITurma{
  // private static turmasCadastradas: Set<number> = new Set();
    private static turmasCadastradas: number[] =[];
    public alunos: Aluno[] = [];
  
    constructor(
      public codigo: number,
      public maximo: number,
      public descricao: string,
      public tipo: TipoEnsino
    ) {
      if (codigo < 1 || codigo > 10) {
        throw new Error('Código da turma deve estar entre 1 e 10');
      }
      if (maximo < 5 || maximo > 10) {
        throw new Error('Número máximo de alunos deve estar entre 5 e 10');
      }
      if (Turma.turmasCadastradas.includes(codigo)) {
        throw new Error('Turma com este código já existe');
      }
      Turma.turmasCadastradas.push(codigo);
    }
  
    adicionarAluno(aluno: Aluno): void {
    const alunoExistente = this.alunos.some(a => a.email === aluno.email);
    if (alunoExistente) {
        throw new Error('Aluno já está matriculado nesta turma');
        }
      if (this.alunos.length >= this.maximo) {
        throw new Error('Turma está cheia');
      }
      if (aluno.tipo !== this.tipo) {
        throw new Error('Tipo de ensino do aluno não corresponde ao da turma');
      }
      if (this.alunos.some(a => a.classificacao === 'A' || a.classificacao === 'D') &&
          (aluno.classificacao === 'B' || aluno.classificacao === 'C')) {
        throw new Error('Alunos com classificação A e D não podem estar na mesma turma com alunos B e C');
      }
      if ((this.alunos.some(a => a.classificacao === 'B' || a.classificacao === 'C')) &&
          (aluno.classificacao === 'A' || aluno.classificacao === 'D')) {
        throw new Error('Alunos com classificação B e C não podem estar na mesma turma com alunos A e D');
      }
      this.alunos.push(aluno);
    }
  
    removerAluno(email: string): void {
      const index = this.alunos.findIndex(a => a.email === email);
      if (index !== -1) {
        this.alunos.splice(index, 1);
      }
    }
  }