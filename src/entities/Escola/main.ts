import { Escola } from './Escola';
import { Turma } from './'; //Não consegui aqui



const turma1 = new Turma(1, 10, 'Matemática', 'presencial');
const turma2 = new Turma(2, 8, 'História', 'ead');


const escola = new Escola('Escola Exemplo');


escola.adicionarTurma(turma1);
escola.adicionarTurma(turma2);


console.log(escola.listarTurmas());


escola.removerTurma(1);


console.log(escola.listarTurmas());


