import React from 'react';
import styled from '@emotion/styled';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';


const Texto = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 1rem;
    text-align:center;
    padding: 1rem;

`;

const Contenedor = styled.div`
    text-align:center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    background-color:#26C6DA;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p`
    color: #00838F;
    padding: 1rem;
    text-transform:uppercase;
    font-weight: bold;
    margin: 0;

`;



const Resultado = ({cotizacion}) => {

    return ( 

        (cotizacion === 0)?<Texto>!!! Elige marca, año y tipo de seguro...</Texto>
        :
        <Contenedor>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                className="resultado"
                key={cotizacion}
                timeout={{enter:800,exit:500}}
                >
                <TextoCotizacion>El total  es: $ <span>{cotizacion} </span></TextoCotizacion>
                </CSSTransition>
            </TransitionGroup>
            
        </Contenedor>
     );
}

Resultado.propTypes={
    cotizacion: PropTypes.number.isRequired
}
 
export default Resultado;