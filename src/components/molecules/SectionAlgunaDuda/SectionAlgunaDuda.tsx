import Box from "@mui/material/Box"
import AlgunaDuda from '../../../assets/alguna_duda.png';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material";

import './SectionAlgunaDuda.scss';

export const SectionAlgunaDuda: React.FC = () => {
    const theme = useTheme();    
    
    return(
        <Box className="contenedor-azul">
          <Box className="contenido-superior">
            <Typography
                color="primary.main"
                sx={{                
                    fontWeight: 700,
                    mb: 2,
                    fontSize: { xs: "2rem", md: "2.6rem" },
                }}
            >
              ¿Tienes alguna duda?
            </Typography>

            <Typography
              sx={{
                color: "#333",
                fontSize: { xs: "1.1rem", md: "1.3rem" },
                mb: 2,
                fontWeight: 500,
              }}
            >
              Consulta nuestra sección de preguntas frecuentes
            </Typography>

            <Typography
              sx={{
                color: "#555",
                mb: 4,
                maxWidth: 500,
                marginInline: { xs: "auto", md: "unset" },
              }}
            >
              ¿Tienes dudas sobre el proceso de inscripción? ¡Contáctanos!
              Un asesor/a te ayudará a resolver tus dudas.
            </Typography>

            {/* BOTONES */}
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                gap: 2,
                flexWrap: "wrap",
              }}
            >
              <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Preguntas Frecuentes</Button>
              <Button variant="contained" color="secondary" sx={{ color: theme.palette.primary.main}}>Contacta a un Asesor/a</Button>
            </Box>
          </Box>
          <Box component={"img"} src={AlgunaDuda} className="img-personas" />
        </Box>      
    );
}