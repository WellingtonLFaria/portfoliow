import Tecnologia from "../models/tecnologia";

export default function Badge(props: { tecnologia: Tecnologia }) {
    return (
        <span className={`rounded-lg ${props.tecnologia.colorTail} px-[3px] m-[1px]`}>
            {props.tecnologia.nome}
        </span>
    );
};