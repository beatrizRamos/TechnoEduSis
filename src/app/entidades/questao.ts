import { Alternativa } from '../entidades/alternativa';
export class Questao {
    id_questao: number;
    disciplina: string;
    assunto: string;
    texto: string;
    pontuacao: number;
    tempo_segundos: number;
    nivel_dificuldade: string;
    data_hora_insercao: Date;
    alternativas: Alternativa [];
}