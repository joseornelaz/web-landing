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
import { useEffect } from "react";
import { Requisitos } from "./Requisitos";

const Nivel: React.FC = () => {
    const { type } = useParams<{ type: string }>();
    
    // Referencias para cada sección con animación
    const lograrasRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const fomentarRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const ofreceRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const fichaRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const timelineRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const dudaRef = useScrollAnimation({ triggerOnce: true, resetKey: type });
    const requisitosRef = useScrollAnimation({ triggerOnce: true, resetKey: type });

    // Scroll al inicio cuando cambia el type
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [type]);

    return(
        <Box
            sx={{display: 'flex', flexDirection: 'column', gap: '24px'}}
        >
            <Main type={type} />
            
            <Box component="div" ref={lograrasRef} className="fade-in">
                <Lograras type={type} />
            </Box>
            <Box component="div" ref={fomentarRef} className="slide-in-left" id="beneficios">
                <Fomentar type={type} />
            </Box>
            <Box component="div" ref={ofreceRef} className="slide-in-right">
                <Ofrece type={type} />
            </Box>
            <Box sx={{
                pt: {xs: '24px', md: '80px'},
                pb: {xs: '24px', md: '40px'}
            }} id="ficha-tecnica">
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
            <Box sx={{pt: {xs: '24px', md: '60px'}}} id="requisitos">
                <Box component="div" ref={requisitosRef} className="slide-in-up">
                    <Requisitos type={type} />
                </Box>
            </Box>
        </Box>
    );
}

export default Nivel;