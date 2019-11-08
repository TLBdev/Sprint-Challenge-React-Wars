import React from 'react';

import styled from 'styled-components'

const StyledCard = styled.div`
    width: 20%;
    padding: 2% 0%;
    margin: 2%;
    background: rgba(0,0,0,.6);
    color: white
`

export default function StarCard(props) {
    return (

        <StyledCard>
            <h1>{props.data.name}</h1>
            <h2>Born: {props.data.birth_year}</h2>
            <h3>{props.data.gender}</h3>
            <p>Weight: {props.data.mass}</p>
            <p>Height: {props.data.height}</p>
            <p>Eyes: {props.data.eye_color}</p>
            <p>Hair: {props.data.hair_color}</p>
        </StyledCard>
    )

}