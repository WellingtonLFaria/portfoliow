import Formacao from "../models/formacao";

export default function FormacaoComponent(props: Formacao) {
  return (
    <div className="formacao">
      <h3 className="text-xl font-bold">{props.curso}</h3>
      <p>{props.instituicao}</p>
      <p>{props.data}</p>
    </div>
  );
};