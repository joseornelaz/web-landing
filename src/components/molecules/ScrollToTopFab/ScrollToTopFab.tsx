import { useState, useEffect } from 'react';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Zoom from '@mui/material/Zoom';
import { ArrowUp } from '../../../assets/icons';

const ScrollToTopFab: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Obtener la altura total del documento
            const scrollHeight = document.documentElement.scrollHeight;
            const clientHeight = document.documentElement.clientHeight;
            const scrollableHeight = scrollHeight - clientHeight;
            
            // Obtener la posición actual del scroll
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            
            // Mostrar el botón cuando se llegue a la mitad de la página
            const halfwayPoint = scrollableHeight / 2;
            setShowButton(scrollTop > halfwayPoint);
        };

        // Agregar el evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el evento cuando el componente se desmonte
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <Zoom in={showButton}>
            <Fab
                color="secondary"
                size="medium"
                aria-label="scroll back to top"
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: 16,
                    right: 16,
                    zIndex: 1000,
                }}
            >
                <ArrowUp />
            </Fab>
        </Zoom>
    );
};

export default ScrollToTopFab;