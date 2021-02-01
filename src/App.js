import React,{useState} from 'react';
import Header from './components/Headear';
import styled from '@emotion/styled';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import Resumen from './components/Resumen';
import Spinner from './components/Spinner';

const ContenedorPrin = styled.div`
    max-width:600px;
    margin: 0 auto;
  `;


const ContenedorFormulario = styled.div`
    background-color:#ffffff;
    padding: 3rem;
  `;

function App() {

  const [resumen,guardarResumen] = useState({
    cotizacion:0,
    datos:{
      marca:'',
      year: '',
      plan: ''
    }
  });

  // usesSTate para el spinner 
  const [cargar,guardarCarga] = useState(false);



  // extraemos los datos 
  const {datos,cotizacion} = resumen;

  return (
    <ContenedorPrin>
      <Header
        titulo='Cotizador de seguros'
      />
      <ContenedorFormulario>
        <Formulario
          guardarResumen={guardarResumen}
          guardarCarga={guardarCarga}
        />

        { cargar ? <Spinner/>: null }
        <Resumen
          datos={datos}
        />
        {!cargar ?
          <Resultado
            cotizacion={cotizacion}
          /> : null}
      </ContenedorFormulario>
    </ContenedorPrin>

  );
}

export default App;
