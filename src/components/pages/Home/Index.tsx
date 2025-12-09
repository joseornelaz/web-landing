import React from "react"
import HomeMain from "./HomeMain"
import { HomeNumeros } from "./HomeNumeros";
import Box from "@mui/material/Box";
import { HomeBienvenida } from "./HomeBienvenida";
import { HomeTestimonio } from "./HomeTestimonios";
import { HomeModeloAcademico } from "./HomeModeloAcademico";
import { HomeAcademiaGlobal } from "./HomeAcademiaGlobal";
import { HomeAsesoria } from "./HomeAsesoria";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import "../../../styles/scrollAnimation.scss";

const Home: React.FC = () => {
    const numerosRef = useScrollAnimation({ triggerOnce: true });
    const bienvenidaRef = useScrollAnimation({ triggerOnce: true });
    const testimonioRef = useScrollAnimation({ triggerOnce: true });
    const modeloRef = useScrollAnimation({ triggerOnce: true });
    const academiaRef = useScrollAnimation({ triggerOnce: true });
    const asesoriaRef = useScrollAnimation({ triggerOnce: true });
    
    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Box sx={{height: { xs: 'auto', md: 'calc(100vh - 200px)'}, mt: { xs: 0, md: '30px' }}}>
                <HomeMain />
            </Box>
            <Box component="div" ref={numerosRef} className="slide-in-left">
                <HomeNumeros />
            </Box>
            <Box component="div" ref={bienvenidaRef} className="slide-in-right">
                <HomeBienvenida />
            </Box>
            <Box component="div" ref={testimonioRef} className="slide-in-up">
                <HomeTestimonio />
            </Box>
            <Box component="div" ref={modeloRef} className="fade-in delay-200">
                <HomeModeloAcademico />
            </Box>
            <Box component="div" ref={academiaRef} className="fade-in">
                <HomeAcademiaGlobal />
            </Box>
            <Box component="div" ref={asesoriaRef} className="slide-in-up">
                <HomeAsesoria />
            </Box>
        </Box>
    )
}

export default Home;