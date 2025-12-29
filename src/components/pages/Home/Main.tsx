import React from 'react';
import Group1 from '../../../assets/home/group_movil.png';
import Group2 from '../../../assets/home/group_desktop.png';

import { SectionMain } from "../../molecules/SectionMain/SectionMain";
import Box from '@mui/material/Box';
import { useMediaQuery, useTheme } from '@mui/material';

export const Main: React.FC = () => {

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

    const info = {
        logoPrograma: null,
        imagenPrograma: isMobile ? Group1 : Group2,
        descripcion: 'Grupo Coppel en conjunto con nuestro socio académico, estamos convencidos que a través de la educación formal podemos transformar el futuro de las personas y sus familias, es por ello que hemos creado para ti los Programas Académicos de Coppel Universidad Corporativa que a través de un modelo andragógico será el mejor medio para que desarrolles las competencias y habilidades que permitan desempeñar con éxito tus actividades laborales y ser una mejor persona en todos los ámbitos de tu vida.',
        duracion: []
    };

    return(
        info && 
            <Box 
                sx={{
                    minHeight: { xs: 'auto', md: 'calc(100vh - 200px)' },
                    mt: { xs: 0, md: '30px' },
                }}
            >
                <SectionMain item={info} isHome={true} type='home' />
            </Box>
    )
}