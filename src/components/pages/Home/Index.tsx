import React from "react"
import HomeMain from "./HomeMain"
import { HomeNumeros } from "./HomeNumeros";
import Box from "@mui/material/Box";
import { HomeBienvenida } from "./HomeBienvenida";
import { HomeTestimonio } from "./HomeTestimonios";
import { HomeModeloAcademico } from "./HomeModeloAcademico";
import { HomeAcademiaGlobal } from "./HomeAcademiaGlobal";
import { HomeAsesoria } from "./HomeAsesoria";

const Home: React.FC = () => {
    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Box sx={{height: { xs: 'auto', md: 'calc(100vh - 200px)'}, mt: { xs: 0, md: '30px' }}}>
                <HomeMain />
            </Box>
            <HomeNumeros />
            <HomeBienvenida />
            <HomeTestimonio />
            <HomeModeloAcademico />
            <HomeAcademiaGlobal />
            <HomeAsesoria />
        </Box>
    )
}

export default Home;