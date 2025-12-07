import { BackgroundContainer } from "../BackgroundContainer/BackgroundContainer";
import PrepaRequisitos from '../../../assets/prepaRequisitos.png';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { Check } from "../../../assets/icons";
import { Typography } from "../../atoms/Typography/Typography";

export const SectionRequisitos: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const puntoFomentar = () => {
        const puntos = ['Tener una antigüedad mínima de 3 meses como Colaborador Coppel y 1 año de antigüedad para familiares directos.','Acta de nacimiento original.','Certificado de secundaria original.','Certificado Parcial de estudios (en caso de revalidación o equivalencia).','Llenar ficha de preinscripción con asesoramiento del equipo de admisión.','CURP'];

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
                            src={PrepaRequisitos}
                            sx={[isMobile && { width: '100%' }]}
                        ></Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: 560, display: 'flex', flexFlow: 'column', justifyContent: 'center', height: '-webkit-fill-available' }}>
                        <TituloPagina>Requisitos:</TituloPagina>
                        <Typography variant="body1" component="p" sxProps={{mb: 4}}>
                            Todo un grupo de personal operativo y académico se encuentra involucrado en Prepa Coppel para ofrecerte estudios de bachillerato de alta calidad académica, flexible y que te ayudará a cursar tus estudios de preparatoria en tus propios tiempos y bajo la disponibilidad e interés que tú mismo decidas dedicarle.
                        </Typography>
                        <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
                            {puntoFomentar()}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </BackgroundContainer> 
    );
}