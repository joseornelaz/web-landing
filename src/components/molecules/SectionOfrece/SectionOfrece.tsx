import { useTheme } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import imgLEG from '../../../assets/section_ofrece/imgLEG.png';
import imgPrepa from '../../../assets/section_ofrece/imgPrepa.png';
import { Typography } from "../../atoms/Typography/Typography";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TituloPagina } from "../TituloPagina/TituloPagina";
import { FlexColumn, FlexRow } from "../../../styles/styles";

type SectionOfreceProps = {
    type: 'prepa' | 'leg';
}

const contentArray = [
    { 
        type: 'prepa', 
        title: 'Prepa Coppel te ofrece',
        cards: ['Beca académica para colaboradores, colaboradoras y sus familiares con base en la Decisión 21-A.', 'Contenidos diseñados para jóvenes y adultos que trabajan.', 'Revalidación o equivalencia de materias, en caso de tener estudios inconclusos de Bachillerato.'],
        imagen: imgPrepa
    },
    { 
        type: 'leg', 
        title: 'La Licenciatura en Gerenciamiento te ofrece',
        cards: ['Beca académica para colaboradores, colaboradoras y familiares con base en la Decisión 21-A.', 'Descuento vía nómina en pago de materias e inscripción.', 'Revalidación o equivalencia de materias, en caso de tener estudios inconclusos de Licenciatura afín.'],
        imagen: imgLEG
    },
];

export const SectionOfrece: React.FC<SectionOfreceProps> = ({ type }) => {
    const theme = useTheme();
    const content = contentArray.find((item) => item.type === type);


    const cards = () => (
        content?.cards.map((text, i) => 
            (
                <Box
                    key={i}
                    sx={{
                        p: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '50px',
                        minHeight: '120px',
                        maxWidth: '561px',
                        borderRadius: '7px',
                        boxShadow: '0px 3px 6px #00000029'
                    }}
                >
                    <ArrowForwardIcon sx={{fontSize: '40px', color: '#05297A'}} />
                    <Typography variant="body1" component="span">{text}</Typography>
                </Box>
            )
        )
    )

    return(
        <Grid container spacing={4}>
            <Grid size={{ xs:12, md:7 }}>
                <Box sx={{...FlexColumn, justifyContent: 'center', height: '100%'}}>
                    <TituloPagina>{content?.title}</TituloPagina>
                    <Box sx={{...FlexColumn, gap: '20px'}}>
                        { cards() }
                    </Box>
                </Box>
            </Grid>
            <Grid size={{ xs:12, md:5 }}>
                <Box sx={{...FlexColumn}}>
                    <Box component="img" src={content?.imagen} />
                    <Box sx={{...FlexRow, gap: '10px'}}>
                        <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Estoy Interesado/a</Button>
                        <Button variant="outlined">Sesiones Informativas</Button>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}