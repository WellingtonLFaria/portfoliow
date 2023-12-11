export default class Formacao {
    public instituicao: string;
    public curso: string;
    public data
    constructor(instituicao: string, curso: string, data: string) {
        this.instituicao = instituicao;
        this.curso = curso;
        this.data = data;
    };
};
