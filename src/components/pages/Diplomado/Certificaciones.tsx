import Box from "@mui/material/Box"
import { FlexColumn, FlexRow } from "../../../styles/styles"
import { Typography } from "../../atoms/Typography/Typography"
import Card from "@mui/material/Card"

import Icon1 from '../../../assets/diplomado/icon1.png';
import Icon2 from '../../../assets/diplomado/icon2.png';
import Icon3 from '../../../assets/diplomado/icon3.png';

const certificaciones = [
    { imagen: Icon1, text: 'Cultura de Digitalización y Adaptación al Cambio.', duracion: '(10 horas)' },
    { imagen: Icon2, text: 'Inteligencia Artificial y Toma de Decisiones basadas en Dato.', duracion: '(20 horas)'},
    { imagen: Icon3, text: 'Liderazgo enfocado en la Transformación Tecnológica con IA y Ciencia de Datos.', duracion: '(20 horas)' },
];

export const Certificaciones: React.FC = () => {

    const cardCertificaciones = (item: any) => {
        return(
            <Card sx={{
                p: 3,                
                borderRadius: 2,                
                minHeight: '250px', // Altura fija para mantener la consistencia
                width: '250px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: '#FFFFFF',
                color: 'text.primary',
            }}>
                <Box sx={{...FlexColumn, alignItems: 'center', justifyContent: 'center'}}>
                    <Box 
                        component="img"
                        src={item.imagen}
                        sx={{
                            mb: '31px',
                        }}
                    />
                    <Typography variant="body1" component="span" sxProps={{ mb: 1, textAlign: 'center' }}>
                        {item.text}
                    </Typography>
                    <Typography variant="body1" component="span" sxProps={{ color: '#215AA8', textAlign: 'center' }}>
                        {item.duracion}
                    </Typography>
                </Box>
                
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
                El diplomado se compone de tres certificaciones:
            </Typography>
            <Box sx={{...FlexRow, gap: '40px', width: '100%', justifyContent: 'center'}}>
                {
                    certificaciones.map((item, i) => (
                        <Box key={i} sx={{ mb: 4 }}>
                            {cardCertificaciones(item)}
                        </Box>
                    ))
                }
            </Box>
        </Box>
    )
}