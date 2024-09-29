import { Aluno } from "./entities/Aluno/Aluno";
import { Escola } from "./entities/Escola/Escola";
import { Turma } from "./entities/Turma/Turma";

const escola = new Escola('Infinity School');


const turmaPresencial = new Turma(1, 10, 'Turma de Desenvolvimento Web', 'presencial');
const turmaEad = new Turma(2, 10, 'Turma de Desenvolvimento Web', 'ead');

const aluno1 = new Aluno('Carlos', 'Santos', 'carlos.santos@gmail.com', 'presencial', turmaPresencial, new Date(1997, 6, 15), [9, 8, 10, 7], true, "A");
const aluno2 = new Aluno('Gustavo', 'Pereira', 'gustavo.pereira@gmail.com', 'presencial', turmaPresencial, new Date(1996, 9, 12), [10, 9, 8, 9], true, "A");
const aluno3 = new Aluno('Beatriz', 'Lima', 'beatriz.lima@gmail.com', 'presencial', turmaPresencial, new Date(1997, 2, 9), [9, 10, 9, 10], true, "A");


const aluno4 = new Aluno('Mariana', 'Ferreira', 'mariana.ferreira@gmail.com', 'ead', turmaEad, new Date(1998, 7, 14), [8, 9, 10, 8], true, "B");
const aluno5 = new Aluno('Marcela', 'Souza', 'marcela.souza@gmail.com', 'ead', turmaEad, new Date(1995, 8, 5), [9, 9, 10, 8], true, "B");
const aluno6 = new Aluno('Juliana', 'Guimaraes', 'Juliana@gmail.com', 'ead', turmaEad, new Date(1996,12,5), [10, 10, 10,10], true,"B" )
const aluno7 = new Aluno('Lucas', 'Kennde', 'lucaskennde@gmail.com', 'ead', turmaEad, new Date(1996,12,5), [10, 10, 10,10], true,"B" )
const aluno8 = new Aluno('Ana', 'Costa', 'ana.costa@gmail.com', 'ead', turmaEad, new Date(1999, 1, 18), [7, 7, 8, 9], true, "B");


const aluno9 = new Aluno('Fernanda', 'Silva', 'fernanda.silva@gmail.com', 'ead', turmaEad, new Date(1998, 3, 23), [8, 9, 8, 10], true, "C");

// const aluno10 = new Aluno('Rafael', 'Almeida', 'rafael.almeida@gmail.com', 'presencial', turmaEad, new Date(2000, 5, 27), [6, 7, 8, 7], true, "C");

// const aluno11 = new Aluno('Paulo', 'Oliveira', 'paulo.oliveira@gmail.com', 'presencial', turmaPresencial, new Date(1996, 11, 20), [7, 8, 9, 6], true, "D");
// const aluno12 = new Aluno('Bruno', 'Mendes', 'bruno.mendes@gmail.com', 'presencial', turmaPresencial, new Date(1996, 10, 22), [7, 8, 7, 9], true, "D");

escola.adicionarTurma(turmaPresencial)
console.log(aluno1.Idade())
turmaPresencial.adicionarAluno(aluno1)
turmaPresencial.adicionarAluno(aluno2)
turmaPresencial.adicionarAluno(aluno3)

turmaEad.adicionarAluno(aluno4)
turmaEad.adicionarAluno(aluno5)
turmaEad.adicionarAluno(aluno6)
turmaEad.adicionarAluno(aluno7)
turmaEad.adicionarAluno(aluno8)
turmaEad.adicionarAluno(aluno9)



console.log(turmaPresencial.alunos)
