import perfil from '../imgs/rosto.png';

export default function SobreMim() {
    return (
        <>
            <h1 className="text-3xl mt-3 font-bold">Sobre mim</h1>
            <img src={perfil} alt="Foto minha" className="rounded-full bg-black w-[280px] h-[280px] float-right object-none" />
            <p className="mt-2 text-xl">
                Olá, conheci a área de Desenvolvimento de Software em 2018 desde então venho estudando e trabalhando em projetos reais, com o objetivo de um dia atuar na área.
                Atualmente cursando Desenvolvimento de Software Multiplataforma (DSM) na Fatec São José dos Campos - Prof. Jessen Vidal.
            </p>
            <h2 className="text-2xl mt-3 font-semibold">Hobbies</h2>
            <ul className="text-xl mt-2">
                <li className="list-disc list-inside">Jogar;</li>
                <li className="list-disc list-inside">Assistir filmes e séries;</li>
                <li className="list-disc list-inside">Conversar com os amigos.</li>
            </ul>
        </>
    );
};