import React, { useState } from 'react';
import Home from './home';
import SobreMim from './sobremim';
import Projetos from './projetos';
import Projeto from '../models/projeto';
import Link from '../models/link';
import Tecnologia from '../models/tecnologia';
import Tecnologias from './tecnologias';
import Formacoes from './formacoes';
import { projetos, tecnologias, formacoes } from '../constants';

export default function Roteador() {
    return (
        <div className='w-full h-full bg-zinc-900 p-2 text-white'>
            <div className='flex flex-col w-11/12 mx-auto'>
                <div className="flex flex-col items-center justify-center h-screen">
                    <Home />
                </div>
                <hr className='border border-white' />
                <div>
                    <SobreMim />
                </div>
                <br />
                <hr className='border border-white' />
                <div>
                    <Projetos projetos={projetos} />
                </div>
                <div>
                    <Tecnologias tecnologias={tecnologias} />
                </div>
                <br />
                <hr className='border border-white' />
                <div>
                    <Formacoes />
                </div>
            </div>
        </div>
    );
};