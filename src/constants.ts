import Projeto from "./models/projeto";
import Tecnologia from "./models/tecnologia";
import Formacao from "./models/formacao";
import Link from "./models/link";
import Curso from "./models/cursos";

export const tecnologias = [
    new Tecnologia("JavaScript", "bg-yellow-400"),
    new Tecnologia("TypeScript", "bg-sky-500"),
    new Tecnologia("React", "bg-sky-500"),
    new Tecnologia("Python", "bg-blue-500"),
    new Tecnologia("Flask", "bg-black"),
    new Tecnologia("HTML", "bg-orange-500"),
    new Tecnologia("CSS", "bg-sky-500"),
    new Tecnologia("Sequelize", "bg-teal-500"),
    new Tecnologia("Express", "bg-green-600"),
    new Tecnologia("Tailwind CSS", "bg-blue-600"),
    new Tecnologia("MySQL", "bg-cyan-500")
];

export const projetos = [
    new Projeto(
        "CallGenie",
        "O CallGenie é um sistema de gestão de chamados que tem como objetivo auxiliar empresas de tecnologia a gerenciar seus chamados de forma eficiente e organizada.",
        [
            new Link("GitHub", "https://github.com/Grupo-Syntax-Squad/CallGenie")
        ],
        [
            new Tecnologia("TypeScript", "bg-sky-500"),
            new Tecnologia("JavaScript", "bg-yellow-400"),
            new Tecnologia("React", "bg-blue-500"),
            new Tecnologia("Sequelize", "bg-teal-500"),
            new Tecnologia("Express", "bg-green-600"),
            new Tecnologia("MySQL", "bg-cyan-500"),
            new Tecnologia("CSS", "bg-sky-500")
        ]
    ),
    new Projeto(
        "Data-Sars",
        "Data-Sars é um sistema desenvolvido com o objetivo de auxiliar jornalistas ao realizar estudos sobre a Covid-Longa.",
        [
            new Link("GitHub", "https://github.com/Grupo-Syntax-Squad/API")
        ],
        [
            new Tecnologia("Python", "bg-blue-500"),
            new Tecnologia("Flask", "bg-black"),
            new Tecnologia("HTML", "bg-orange-500"),
            new Tecnologia("CSS", "bg-sky-500"),
            new Tecnologia("JavaScript", "bg-yellow-400")

        ]
    ),
    new Projeto(
        "Portfolio",
        "Este portfolio que você está acessando neste exato momento",
        [
            new Link("GitHub", "https://github.com/WellingtonLFaria/Portfolio")
        ],
        [
            new Tecnologia("TypeScript", "bg-sky-500"),
            new Tecnologia("React", "bg-blue-500"),
            new Tecnologia("Tailwind CSS", "bg-sky-600")
        ]
    )
];

export const formacoes = [
    new Formacao("Ensino Técnico Integrado ao Médio - ETEC Profª Ilza Nascimento Pintus", "Técnico em Automação Industrial", "2020 - 2022"),
    new Formacao("Ensino Superior - Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal", "Desenvolvimento de Software Multiplataforma", "2023 - CURSANDO")
];

export const cursos = [
    new Curso("[UDEMY] Curso de Python 3 do básico ao avançado - com projetos reais", "https://www.udemy.com/course/python-3-do-zero-ao-avancado/"),
    new Curso("[Curso em vídeo] Curso de Python 3 – Mundo 1 [40 Horas]", "https://www.cursoemvideo.com/curso/python-3-mundo-1/"),
    new Curso("[Curso em vídeo] Curso de Python 3 – Mundo 2 [40 Horas]", "https://www.cursoemvideo.com/curso/python-3-mundo-2/"),
    new Curso("[Curso em vídeo] Curso de Python 3 – Mundo 3 [40 Horas]", "https://www.cursoemvideo.com/curso/python-3-mundo-3/")
];