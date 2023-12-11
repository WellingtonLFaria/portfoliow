import Badge from "../components/badge";
import Tecnologia from "../models/tecnologia";

export default function Tecnologias(props: { tecnologias: Array<Tecnologia> }) {
    let tecnologias = props.tecnologias.map(tecnologia => {
        return(
            <Badge tecnologia={tecnologia} />
        );
    });
    return (
        <>
            <h1 className="text-3xl mt-3 font-bold text-center">Tecnologias</h1>
            <div className="mt-3 flex flex-wrap justify-center">
                {tecnologias}
            </div>
        </>
    );
};