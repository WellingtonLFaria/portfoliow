import React from 'react';
import FormacaoComponent from '../components/formacao';
import { formacoes, cursos } from '../constants';
import CursoComponent from '../components/curso';

export default function Formacoes() {
    return (
        <>
            <h1 className="text-3xl mt-3 font-bold">Formação e Cursos</h1>
            <h2 className='text-2xl mt-2 font-bold'>Formação</h2>
            <div className="mt-3 flex flex-wrap justify-around">
                {
                    formacoes.map(formacao => {
                        return (
                            <FormacaoComponent {...formacao} />
                        );
                    })
                }
            </div>
            <h2 className='text-2xl mt-2 font-bold'>Cursos</h2>
            <div className="mt-3">
                <ul className='list-disc list-inside'>
                    {
                        cursos.map(curso => {
                            return (
                                <li className='hover:text-blue-500 text-blue-700'>
                                    <CursoComponent {...curso} />
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
};