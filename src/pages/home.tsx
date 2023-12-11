import instagram from '../imgs/instagram.png';
import linkedin from '../imgs/linkedin.png';
import github from '../imgs/github.png'

export default function Home() {
    return (
        <>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">Wellington Luiz de Faria</h1>
            <h2 className='text-2xl md:text-3xl lg:text-4xl'>Desenvolvedor de Software</h2>
            <hr className="w-7/12 md:w-6/12 lg:w-5/12 border-t border-white mt-2" />
            <div className="w-6/12 md:w-5/12 lg:w-4/12 flex justify-between mt-2">
                <img src={instagram} alt="Ícone instagram" className='w-10 cursor-pointer' onClick={() => {window.open("https://www.instagram.com/wellingtonfarial/")}}/>
                <img src={linkedin} alt="Ícone LinkedIn" className='w-10 cursor-pointer' onClick={() => {window.open("https://www.linkedin.com/in/wellington-luiz-de-faria-92007425b/")}}/>
                <img src={github} alt="Ícone GitHub" className='w-10 cursor-pointer'onClick={() => {window.open("https://github.com/WellingtonLFaria")}}/>
            </div>
        </>
    );
};