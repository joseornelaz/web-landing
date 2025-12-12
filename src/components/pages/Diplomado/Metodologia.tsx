import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box"
import { FlexColumn } from "../../../styles/styles"
import { Typography } from "../../atoms/Typography/Typography"

const metodologias = [
    'Se emplean estrategias de aprendizaje activo, análisis de casos, simulaciones con herramientas de IA, actividades integradoras, acompañamiento por tutores virtuales, facilitadores de aprendizaje y expertos temáticos en diferentes sesiones y talleres.',
    'El entorno virtual de aprendizaje promueve la autogestión,la colaboración entre pares y la reflexión crítica, garantizando una experiencia formativa alineada con las necesidades del profesional adulto.'
];

export const Metodologia: React.FC = () => {

    const cardMetodologia = (item: string) => {
        return(
            <Card sx={{
                p: 3,                
                borderRadius: 1,
                minHeight: '175px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFFFFF',
                color: 'text.primary',
                boxShadow: '0px 3px 6px #00000029'
            }}>
                <Typography variant="body2" component="span" sxProps={{ textAlign: 'center' }}>
                    {item}
                </Typography>
            </Card>
        )
    }
    
    return(
        <Box
            sx={{
                ...FlexColumn,                
                alignItems: 'center',
                justifyItems: 'center',
                gap: '58px',
                width: '100%'
            }}
        >
            <Typography component="h3" variant="h3" sxProps={{ textAlign: 'center'}}>
                Metodología de Enseñanza aprendizaje
            </Typography>
            <Grid container spacing={4} sx={{ justifyContent: 'center' }}>
                {
                    metodologias.map((item: string, i: number) => (
                        <Grid size={{xs:12, md: 6}} key={i}>
                            {cardMetodologia(item)}
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}