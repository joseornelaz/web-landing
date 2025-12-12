import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FomentarMaestria from '../../../assets/diplomado/lograras.png';
import { NivelTypes } from '../../../types/NivelTypes';
import { BackgroundContainer } from '../../molecules/BackgroundContainer/BackgroundContainer';
import { TituloPagina } from '../../molecules/TituloPagina/TituloPagina';
import { Typography } from '../../atoms/Typography/Typography';
import { Check } from "../../../assets/icons";
import { FlexColumn } from '../../../styles/styles';

const FomentarArray = [    
    {
        type: NivelTypes.DIPLOMADO,
        values: {
            title: "En este Diplomado lograrás:",
            puntos: [
                {label: 'Certificación I:' , value: 'Desarrollar actitudes y habilidades de apertura al cambio, comprensión de la cultura digital y resiliencia ante entornos tecnológicos en constante evolución.'},
                {label: 'Certificación II:' , value: 'Aplicar herramientas de inteligencia artificial en entornos corporativos, utilizando modelos de aceptación tecnológica y metodologías de análisis de datos para fundamentar decisiones estratégicas.'},
                {label: 'Certificación II:' , value: 'Integrar competencias de liderazgo digital para promover una cultura organizacional basada en datos, innovación y mejora continua, alineada con la estrategia empresarial.'},
            ],
            image: FomentarMaestria
        }
    },
]

export const Lograras: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [info, setInfo] = React.useState<any>(null);

    React.useEffect(() => {
        setInfo(FomentarArray.find(item => item.type.toLowerCase() === NivelTypes.DIPLOMADO.toLowerCase())?.values || {});
    },[]);
    
    const puntoFomentar = () => {
        return info.puntos.map((item: any, i: number) => <Box key={i} sx={{display: 'flex', gap: 2, alignItems: 'flex-start'}}>
            <Box component="img" src={Check} sx={{mt: 1}}/>
            <Box sx={{...FlexColumn, gap: 1}}>
                <Typography variant="body3" component="span" sxProps={{fontSize: '1.3rem'}}>{item.label}</Typography>
                <Typography variant="body1" component="span">{item.value}</Typography>
            </Box>
        </Box>)
    }
    
    return(
        info && <BackgroundContainer backgroundSide="left">
            <Grid container spacing={4}>
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
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina fontSize='h2'>{info.title}</TituloPagina>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}