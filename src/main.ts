import { Aluno } from "./entities/Aluno/Aluno";
import { Turma } from "./entities/Turma/Turma";

const turmaPresencial = new Turma(1, 5, 'Turma de Desenvolvimento Web', 'presencial');
const aluno1 = new Aluno('Lucas', 'Kennde', 'lucaskennde@gmail.com', 'presencial', turmaPresencial, new Date(1996,12,5), [10, 10, 10,10], true,"B" )

console.log(aluno1.Idade())
turmaPresencial.adicionarAluno(aluno1)
console.log(turmaPresencial)