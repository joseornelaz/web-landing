import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  useTheme,
} from "@mui/material";

import logo from '../../../assets/logo.png';
import { useLocation } from "react-router-dom";

export const Footer: React.FC = () => {
  const location = useLocation();
  const theme = useTheme();

  const isInscribirmePage = location.pathname.startsWith('/inscribirme/');

  return (
    <Box component="footer" sx={{ mt: !isInscribirmePage ? 8 : 0 }}>
      <Box 
        sx={{
          bgcolor: theme.palette.secondary.main,
          py: '10px',
        }}
      />
      {/* TOP BLUE SECTION */}
      <Box
        sx={{
          bgcolor: theme.palette.primary.main,
          color: "white",
          py: { xs: 6, md: 8 },
        }}
      >
        <Container>
          <Grid container spacing={6}>
            {/* CONTACTO */}
            <Grid size={{ xs:12, md:4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 3, fontWeight: 600, letterSpacing: 0.5 }}
              >
                CONTÁCTANOS
              </Typography>

              <Typography>Teléfono:</Typography>
              <Typography sx={{ mt: 1, mb: 2 }}>
                800 849 7056 y 800 890 9919
              </Typography>

              <Typography>Correo Electrónico:</Typography>
              <Typography sx={{ mt: 1 }}>
                contacto@academiaglobal.mx
              </Typography>
            </Grid>

            {/* ACCESOS RÁPIDOS */}
            <Grid size={{ xs:12, md:4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 3, fontWeight: 600, letterSpacing: 0.5 }}
              >
                ACCESOS RÁPIDOS
              </Typography>

              <Grid container direction="column" spacing={1}>
                {[
                  "Avisos Importantes",
                  "Prepa Coppel",
                  "Licenciatura en Gerenciamiento",
                  "Ingeniería en Desarrollo de Software",
                  "Maestría en Dirección de Negocios",
                ].map((text) => (
                  <Grid key={text}>
                    <Typography
                      sx={{
                        ":hover": { textDecoration: "underline", cursor: "pointer" },
                      }}
                    >
                      {text}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* ALIADOS ESTRATÉGICOS */}
            <Grid size={{ xs:12, md:4 }}>
              <Typography
                variant="h6"
                sx={{ mb: 3, fontWeight: 600, letterSpacing: 0.5 }}
              >
                ALIADOS ESTRATÉGICOS
              </Typography>

              <Typography sx={{ mb: 4 }}>Academia Global</Typography>

              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  textTransform: "none",
                  borderRadius: 2,
                  px: 3,
                }}
              >
                Contacta a un Asesor
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* BOTTOM DARK SECTION */}
      <Box sx={{ bgcolor: "#2E2E2E", color: "white", py: 6 }}>
        <Container>
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <Box
                component="img" 
                src={logo}
                sx={{ mr: 2 }}
            />
            

            <Typography sx={{ mt: 1, fontSize: 12, opacity: 0.8 }}>
              DERECHOS RESERVADOS © AG COLLEGE
            </Typography>
          </Box>

          <Typography
            sx={{
              textAlign: "center",
              fontSize: 12,
              maxWidth: 900,
              mx: "auto",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            Manuel Romero 96-A, Colonia Chapultepec, C.P. 80040, Culiacán,
            Sinaloa, México. Todo el material, imágenes y textos incluidos en
            esta página web son propiedad de AG COLLEGE y se encuentran
            protegidos por la legislación internacional y mexicana en materia de
            Derechos de Autor. Ninguna parte de esta página web podrá ser
            citada, copiada ni reproducida en forma o medio alguno, sin el
            previo consentimiento por escrito de AG COLLEGE.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};