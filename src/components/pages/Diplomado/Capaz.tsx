import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FomentarMaestria from '../../../assets/diplomado/capaz.png';
import { NivelTypes } from '../../../types/NivelTypes';
import { TituloPagina } from '../../molecules/TituloPagina/TituloPagina';
import { Typography } from '../../atoms/Typography/Typography';
import { Check } from "../../../assets/icons";

const FomentarArray = [    
    {
        type: NivelTypes.DIPLOMADO,
        values: {
            title: "Como egresado del Diplomado serás capaz de:",
            puntos: [
                'Fortalecer las capacidades de liderazgo para integrar tecnologías emergentes, como la inteligencia artificial y la analítica de datos, en procesos de transformación organizacional.',
                'Las y los participantes desarrollarán criterios para liderar equipos en entornos digitales, impulsar la innovación, tomar decisiones informadas y gestionar el cambio con enfoque ético, alineando el uso de la tecnología con la generación de valor en sus organizaciones.'
            ],
            image: FomentarMaestria
        }
    },
]

export const Capaz: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [info, setInfo] = React.useState<any>(null);

    React.useEffect(() => {
        setInfo(FomentarArray.find(item => item.type.toLowerCase() === NivelTypes.DIPLOMADO.toLowerCase())?.values || {});
    },[]);
    
    const puntoFomentar = () => {
        return info.puntos.map((item: string, i: number) => <Box key={i} sx={{display: 'flex', gap: 2, alignItems: 'flex-start'}}>
            <Box component="img" src={Check} sx={{mt: 1}}/>
            <Typography variant="body1" component="span">{item}</Typography>
        </Box>)
    }
    
    return(
        info && <Box>
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina fontSize='h2'>{info.title}</TituloPagina>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ width: '100%', textAlign: 'center' }}
                    >
                        <Box
                            component="img"
                            src={info.image}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}