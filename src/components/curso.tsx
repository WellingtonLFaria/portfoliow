import Curso from "../models/cursos";

export default function CursoComponent(props: Curso) {
    return (
        <a className="font-bold" href={props.link}>{props.curso}</a>
    );
};