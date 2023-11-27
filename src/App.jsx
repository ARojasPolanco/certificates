import fundamentos from '../public/images/fundamentos.png'
import react from '../public/images/react.js.png'
import fullstack from '../public/images/full-stack.png'
import frontend from '../public/images/html-css-js.jpg'
import security from '../public/images/Seguridad_informatica.jpg'
import secutity2 from '../public/images/Seguridad_informatica_2.jpg'
import tailwind from '../public/images/Tailwind.jpg'
import js from '../public/images/js.jpg'
import css from '../public/images/css.jpg'
import html from '../public/images/html.jpg'

function App() {

  return (
    <main>
      <h1 className="text-blue-600 font-sans text-center text-2xl p-6">Certificados de estudio</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 max-w-[950px] mx-auto'>
        <img className='h-[250px] shadow-lg' src={react} alt="" />
        <img className='h-[250px] shadow-lg' src={fundamentos} alt="" />
        <img className='h-[250px] shadow-lg' src={fullstack} alt="" />
        <img className='h-[250px] shadow-lg' src={js} alt="" />
        <img className='h-[250px] shadow-lg' src={css} alt="" />
        <img className='h-[250px] shadow-lg' src={html} alt="" />
        <img className='h-[250px] shadow-lg' src={tailwind} alt="" />
        <img className='h-[250px] shadow-lg' src={frontend} alt="" />
        <img className='h-[250px] shadow-lg' src={security} alt="" />
        <img className='h-[250px] shadow-lg' src={secutity2} alt="" />
      </div>
    </main>
  )
}

export default App
