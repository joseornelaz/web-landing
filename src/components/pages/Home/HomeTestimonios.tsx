import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "../../atoms/Typography/Typography";

import foco from '../../../assets/icons/foco.png';
import linea from '../../../assets/icons/linea.png';

import CardCarousel from "../../molecules/CardCarousel/CardCarousel";
import { useTheme } from "@mui/material";

const testimonials = [
  {
    text: "Nunca había estudiado en línea, me gusta mucho el sistema y que la plataforma sea simple.",
    name: "José García",
    grade: "Licenciatura en Gerenciamiento",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
  {
    text: "Quiero desarrollarme como persona y tener mayor conocimiento, más seguridad para conversar sobre otros temas.",
    name: "María Aurora Canales",
    grade: "Bachillerato",
  },
];


const recomendaciones = [
    {icon: foco, titulo: 'Recomendaciones', text: 'En Coppel Universidad Corporativa nos sentimos muy orgullosos de formar parte de tu desarrollo profesional a través de nuestros programas académicos.'},
    {icon: linea, titulo: 'Manténtelas Actualizado', text: 'Para un mejor aprovechamiento es importante que complementes tus estudios con las lecturas, ejercicios y videos que se recomiendan en cada curso para que logres aprendizajes prácticos y significativos.'},
];

export const HomeTestimonio: React.FC = () => {   
    const theme = useTheme();

    const recomendacionesCard = () => {
        return(
            <Grid container spacing={4}>
                {
                    recomendaciones.map((item, i) => 
                        <Grid size={{ xs: 12, md: 6 }} key={i} >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    width: '100%'
                                }}
                            >
                                <Box component="img" src={item.icon} sx={{mr: '30px'}} />
                                <Box sx={{ width: '6px', height: '80px', backgroundColor: theme.palette.primary.main, mr: '20px' }}></Box>
                                <Box
                                    sx={{display: 'flex', flexDirection: 'column', gap: '8px'}}
                                >
                                    <Typography variant="h2" component="h2">{item.titulo}</Typography>
                                    <Typography variant="body2" component="span">{item.text}</Typography>
                                </Box>
                                
                            </Box>
                        </Grid>
                    )
                }
            </Grid>
        )
    }

    return(
        <>
            {
                recomendacionesCard()
            }
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '13px', alignItems: 'center', justifyContent: 'center', mt: 8}}>
                <Typography variant="h3" component="h3">Testimonios</Typography>
                <Typography variant="h1" component="h1" color="primary">Lo que nuestros alumnos dicen</Typography>
            </Box>
            <CardCarousel items={testimonials} type="testimonios" />
        </>
    )
}