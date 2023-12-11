import Link from "./link";
import Tecnologia from "./tecnologia";

export default class Projeto {
    public nome: string;
    public descricao: string;
    public links: Array<Link>;
    public tecnologias: Array<Tecnologia>;
    constructor(nome: string, descricao: string, links: Array<Link>, tecnologias: Array<Tecnologia>) {
        this.nome = nome;
        this.descricao = descricao;
        this.links = links;
        this.tecnologias = tecnologias;
    };
};