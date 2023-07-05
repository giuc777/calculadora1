import logo from './img/iconApp/logo.png';
import { useState } from 'react';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';



export function App() {
  const styleLogo = {
    height: '20vh',
    width: '40vh',
  };

  const [mathExpression, setMathExpression] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.textContent;
    setMathExpression(input);
  };



  return (
    <>
      <header className="container text-center" style={{ height: '20vh' }}>
        <figure>
          <img src={logo} alt="IconMathEasy" style={styleLogo} />
        </figure>
      </header>
      <section className='container'>
        <div contentEditable={true} onInput={handleInputChange} className="bg-light">
        </div>
        <p>A continuación se muestra una expresión matemática:</p>
      <InlineMath math="\sqrt[5]{16}" />
      <p>Aquí hay otra expresión matemática:</p>
      <BlockMath math="f(x) = \int_{-\infty}^{\infty} F(\omega) e^{2\pi i \omega x} d\omega" />

      </section>

    </>
  );
}

