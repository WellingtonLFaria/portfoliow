import ProjetoComponent from "../components/projeto";
import Projeto from "../models/projeto";

export default function Projetos(props: {projetos: Array<Projeto>}) {
    let projetosElements = props.projetos.map(projeto => {
        return (
            <ProjetoComponent projeto={projeto}/>
        );
    });
    return (
        <>
            <h1 className="text-3xl mt-3 font-bold">Projetos</h1>
            <div className="mt-6 flex flex-wrap justify-around">
                {projetosElements}
            </div>
        </>
    );
};