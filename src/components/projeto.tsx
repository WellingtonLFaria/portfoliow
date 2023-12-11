import Projeto from "../models/projeto";
import Badge from "./badge";
export default function ProjetoComponent(props: { projeto: Projeto }) {
    return (
        <div className="flex flex-col justify-center w-60 border-2 rounded border-zinc-800 bg-zinc-800 p-1 m-1" onClick={() => {window.open(props.projeto.links[0].link, "_blank")}}>
            <h1 className="text-lg font-bold">{props.projeto.nome}</h1>
            <p>{props.projeto.descricao}</p>
            <h2 className="font-bold">Links:</h2>
            <div>
                {
                    props.projeto.links.map(link => {
                        return (<a href={link.link} className="hover:text-blue-500 text-blue-700">{link.nome}</a>);
                    })
                }
            </div>
            <h2 className="font-bold">Tecnologias:</h2>
            <div className="flex flex-wrap">
                {
                    props.projeto.tecnologias.map(tecnologia => {
                        return (
                            <Badge tecnologia={tecnologia} />
                        );
                    })
                }
            </div>
        </div>
    );
};