import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { Main } from "./Main";
import { Fomentar } from "./Fomentar";
import { Ofrece } from "./Ofrece";
import { FichaTecnica } from "./FichaTecnica";
import { Timeline } from "./Timeline";
import { Lograras } from "./Lograras";
import { SectionAlgunaDuda } from "../../molecules/SectionAlgunaDuda/SectionAlgunaDuda";

import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import "../../../styles/scrollAnimation.scss";
import { useEffect, useState } from "react";
import { Requisitos } from "./Requisitos";

const Nivel: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    const [mainTransform, setMainTransform] = useState(0);
    
    // Referencias para cada sección con animación
    // Ahora todas se reinician cuando cambia 'type'
    const lograrasRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const fomentarRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const ofreceRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const fichaRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const timelineRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const dudaRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const requisitosRef = useScrollAnimation({ triggerOnce: true, resetKey: type });

    // Efecto parallax para el Main
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const scrolled = window.pageYOffset;
    //         setMainTransform(scrolled * 0.5); // Ajusta el 0.5 para más/menos efecto
    //     };

    //     window.addEventListener('scroll', handleScroll);
    //     return () => window.removeEventListener('scroll', handleScroll);
    // }, []);

    // Scroll al inicio cuando cambia el type
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [type]);

    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Box 
                // className="hero-fade-in parallax-main" // Animación de entrada + parallax
                sx={{
                    height: { xs: 'auto', md: 'calc(100vh - 200px)'}, 
                    mt: { xs: 0, md: '30px' },
                    transform: `translateY(${mainTransform}px)`, // Efecto parallax
                    opacity: Math.max(1 - (mainTransform / 500), 0.3) // Fade out al hacer scroll
                }}
            >
                <Main type={type} />
            </Box>
            <Box component="div" ref={lograrasRef} className="fade-in">
                <Lograras />
            </Box>
            <Box component="div" ref={fomentarRef} className="slide-in-left">
                <Fomentar type={type} />
            </Box>
            <Box component="div" ref={ofreceRef} className="slide-in-right">
                <Ofrece type={type} />
            </Box>
            <Box sx={{
                pt: {xs: '24px', md: '80px'},
                pb: {xs: '24px', md: '40px'}
            }}>
                <Box component="div" ref={fichaRef} className="scale-in">
                    <FichaTecnica />
                </Box>
            </Box>
            <Box component="div" ref={timelineRef} className="slide-in-up">
                <Timeline type={type} />
            </Box>
            
            <Box component="div" ref={dudaRef} className="fade-in delay-200">
                <SectionAlgunaDuda />
            </Box>
            <Box sx={{pt: {xs: '24px', md: '60px'}}}>
                <Box component="div" ref={requisitosRef} className="slide-in-up">
                    <Requisitos type={type} />
                </Box>
            </Box>
        </Box>
    );
}

export default Nivel;