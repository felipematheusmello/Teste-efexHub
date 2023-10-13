import { Container } from "@mui/material";
import React from "react";


function AppContainer ({children}) {
    return (
        <Container>
            { children }
        </Container>
    )
}

export default AppContainer