import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { FlexColumn, FlexRow } from "../../../styles/styles";
import { Typography } from "../../atoms/Typography/Typography";
import { Button, useTheme } from "@mui/material";
import { AccordionPreguntas } from "../../molecules/AccordionPreguntas/AccordionPreguntas";

const preguntas = [
        {
            pregunta: '¿Quién puede inscribirse en los Programas Académicos de UCC?',
            respuesta: 'Esta prestación, es para los Colaboradores de todas las unidades de negocio que conforman Grupo Coppel a nivel nacional y sus familiares directos (Cónyuge e hijos).',
        },
        {
            pregunta: '¿Mi beca del 50% qué gastos cubre?',
            respuesta: 'La beca del 50% cubre los costos de inscripción y colegiaturas. No incluye materiales adicionales, libros o certificaciones externas.',
        },
        {
            pregunta: '¿Hacen revalidación o equivalencia de otras universidades?',
            respuesta: 'Sí, realizamos proceso de revalidación de estudios previos. Debes presentar tu historial académico oficial para evaluación.',
        },
        {
            pregunta: '¿Cómo sé quién es mi ERH local?',
            respuesta: 'Puedes consultar con el departamento de Recursos Humanos de tu unidad de negocio o revisar el directorio interno de la empresa.',
        },
    ];

const Preguntas: React.FC = () => {
    const theme = useTheme();

    return(
        <Box sx={{pt: 4 }}>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 5 }}>
                    <Box sx={{...FlexColumn}}>
                        <Typography variant="h2" component="h2" color="primary" sxProps={{mb: '18px'}}>
                            Preguntas Generales
                        </Typography>
                        <Typography variant="body1" component="span" sxProps={{mb: '37px'}}>
                            A continuación encontrarás las respuestas a las preguntas más comunes para que puedas tomar una decisión. Con gusto te atenderemos si deseas iniciar tu Proceso de inscripción o si requieres Contacta a un asesor para aclarar más dudas.
                        </Typography>
                        <Box sx={{...FlexRow, gap: 2}}>
                            <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main }}>Proceso de inscripción</Button>
                            <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main }}>Contacta a un Asesor/a</Button>
                        </Box>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, md: 7 }}>
                    <Box sx={{...FlexColumn}}>
                        {/* <AccordionPreguntas /> */}
                        {preguntas.map((item, index) => (
                            <AccordionPreguntas 
                                key={index}
                                pregunta={item.pregunta}
                                respuesta={item.respuesta}
                            />
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Preguntas;