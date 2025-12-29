import { useEffect } from "react";
import Box from "@mui/material/Box";

import { Main } from "./Main";
import { Certificaciones } from "./Certificaciones";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";
import { Lograras } from "./Lograras";
import { Capaz } from "./Capaz";
import { Metodologia } from "./Metodologia";
import { SectionAlgunaDuda } from "../../molecules/SectionAlgunaDuda/SectionAlgunaDuda";
import "../../../styles/scrollAnimation.scss";

const Diplomado: React.FC = () => {
    const type = 'diplomado';
    
    // Referencias para cada sección con animación
    const lograrasRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const fomentarRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const ofreceRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const timelineRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const dudaRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    
    // Scroll al inicio cuando cambia el type
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [type]);

    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Box 
                sx={{
                    minHeight: { xs: 'auto', md: 'calc(100vh - 200px)' },
                    mt: { xs: 0, md: '30px' },
                }}
            >
                <Main />
            </Box>
            <Box component="div" ref={lograrasRef} className="fade-in">
                <Certificaciones />
            </Box>
            <Box component="div" ref={fomentarRef} className="slide-in-left" id="beneficios">
                <Lograras />
            </Box>
            <Box component="div" ref={ofreceRef} className="slide-in-right" id="capaz">
                <Capaz />
            </Box>
            <Box sx={{
                pt: {xs: '24px', md: '80px'},
                pb: {xs: '24px', md: '100px'}
            }}>
                <Box component="div" ref={timelineRef} className="slide-in-up" id="metodologia">
                    <Metodologia />
                </Box>
            </Box>
            <Box component="div" ref={dudaRef} className="fade-in delay-200">
                <SectionAlgunaDuda />
            </Box>
        </Box>
    );
}

export default Diplomado;