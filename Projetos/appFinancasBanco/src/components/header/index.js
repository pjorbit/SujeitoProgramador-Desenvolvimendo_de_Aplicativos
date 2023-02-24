import React from "react";
import { Container, Title } from './style';

export default function Header({title}) {
    return(
        <Container>
            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    )
}