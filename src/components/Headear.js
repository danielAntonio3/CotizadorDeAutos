import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorHeader = styled.header`
    background-color:#26c6DA;
    padding:10px;
    font-weight:bold;
    color:#ffffff;
    `;


const TextoHeader = styled.h1`
    margin:0;
    font-size: 2rem;
    font-family:'slabo 27px',serif;
    text-align:center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorHeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorHeader>
     );
}
 
Header.propTypes={
    titulo: PropTypes.string.isRequired
}
export default Header;