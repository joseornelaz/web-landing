import Grid from "@mui/material/Grid";
import { BackgroundContainer } from "../../molecules/BackgroundContainer/BackgroundContainer";
import Box from "@mui/material/Box";
import { Typography } from "../../atoms/Typography/Typography";
import { TituloPagina } from "../../molecules/TituloPagina/TituloPagina";
import Prepa2 from '../../../assets/prepa/prepa2.png';
import { useMediaQuery, useTheme } from "@mui/material";
import Check from '../../../assets/icons/check.png';

export const PrepaFomentar: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const puntoFomentar = () => {
        const puntos = ['Trabajo en equipo y colaborativo.', 'Aprendizaje autónomo.', 'Comunicación efectiva.', 'Pensamiento crítico y reflexivo.', 'Participación responsable en la sociedad.', 'Organización y gestión del tiempo.'];

        return puntos.map((item, i) => <Box key={i} sx={{display: 'flex', gap: 2, alignItems: 'center'}}>
            <Box component="img" src={Check} />
            <Typography variant="body1" component="span">{item}</Typography>
        </Box>)
    }

    return(
        <BackgroundContainer backgroundSide="left">
            <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box
                        sx={{ width: '100%', textAlign: 'center' }}
                    >
                        <Box
                            component="img"
                            src={Prepa2}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina>Prepa Coppel<br/>fomentará en ti:</TituloPagina>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer>
    );
}