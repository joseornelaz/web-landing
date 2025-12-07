// import Box from "@mui/material/Box";
// import { Card, Typography } from "@mui/material";
// import HomeAcademico from "../../../assets/home/home_academico.png";

// export const HomeModeloAcademico: React.FC = () => {
//   return (
//     <Box sx={{ position: "relative", width: "100%", maxWidth: "1280px", mx: "auto", mt: 10 }}>
      
//       {/* IMAGEN SOBRE EL CARD */}
//       <Box
//         component="img"
//         src={HomeAcademico}
//         alt="Modelo académico"
//         sx={{
//           position: "absolute",
//           top: "-80px",     // ELEVA la imagen por encima del cuadro azul
//           left: "30px",
//           width: { xs: "55%", md: "45%" },
//           maxWidth: "520px",
//           zIndex: 10,
//         }}
//       />

//       {/* CARD AZUL */}
//       <Card
//         sx={{
//           width: "100%",
//           borderRadius: "24px",
//           overflow: "hidden",
//           boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
//         }}
//       >
//         <Box
//           sx={{
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             background: "linear-gradient(135deg, #2563EB 0%, #0F172A 100%)",
//             alignItems: "center",
//             p: { xs: 3, md: 6 },
//             minHeight: 585,
//             position: "relative",
//             pl: { xs: 3, md: "48%" }, // ESPACIO para la imagen flotante
//           }}
//         >
//           {/* TEXTO */}
//           <Box sx={{ color: "white" }}>
//             <Typography
//               variant="h4"
//               fontWeight={700}
//               sx={{ mb: 2, fontSize: { xs: "28px", md: "38px" } }}
//             >
//               Modelo Académico
//             </Typography>

//             <Typography sx={{ mb: 2, lineHeight: 1.6 }}>
//               El modelo académico de nuestros programas está diseñado por
//               competencias, es decir, orientado al desarrollo de tus conocimientos,
//               habilidades y experiencias que te permiten aprender a conocer,
//               aprender a hacer y aprender a ser.
//             </Typography>

//             <Typography sx={{ mb: 3, lineHeight: 1.6 }}>
//               El objetivo principal de los programas académicos desarrollados por
//               Academia Global, es apoyar a nuestros colaboradores a su crecimiento
//               profesional. Cualquier persona de cualquier edad, si desea estudiar
//               en esta modalidad virtual se le puede facilitar al 100%.
//             </Typography>

//             <Typography sx={{ fontSize: 20, fontWeight: 600 }}>
//               Trabaja y estudia con nuestro modelo
//             </Typography>
//           </Box>
//         </Box>
//       </Card>
//     </Box>
//   );
// };
import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import HomeAcademico from "../../../assets/home/home_academico.png";

export const HomeModeloAcademico: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1280px",
        mx: "auto",
        mt: 10,
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* IMAGEN SOBRE EL CARD (relative en mobile, absolute en desktop) */}
      <Box
        component="img"
        src={HomeAcademico}
        alt="Modelo académico"
        sx={{
          width: { xs: "70%", sm: "60%", md: "47.2%" },
          maxWidth: "520px",
          position: {
            xs: "relative",   // móvil → se mueve con el flujo
            md: "absolute",   // desktop → flotando
          },

          top: {
            xs: 0,
            md: "-80px",      // solo en desktop
          },

          left: {
            xs: "50%",
            md: "30px",
          },

          transform: {
            xs: "translateX(-50%)",
            md: "none",
          },

          zIndex: 10,
          mb: { xs: 2, md: 0 },
        }}
      />

      {/* CARD AZUL */}
      <Card
        sx={{
          width: "100%",
          borderRadius: "24px",
          overflow: "hidden",
          boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            background: "linear-gradient(135deg, #2563EB 0%, #0F172A 100%)",
            alignItems: "center",
            p: { xs: 3, md: 6 },
            minHeight: { xs: "auto", sm: "30%", md: 482, lg: 585, xl: 585 },
            position: "relative",

            // Solo en desktop dejamos espacio para la imagen flotante
            pl: { xs: 3, md: "48%" },
          }}
        >
          {/* TEXTO */}
          <Box sx={{ color: "white" }}>
            <Typography
              variant="h1"
              sx={{ mb: 2 }}
            >
              Modelo Académico
            </Typography>

            <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
              El modelo académico de nuestros programas está diseñado por competencias, es decir, orientado al desarrollo de tus conocimientos, habilidades y experiencias que te permiten aprender a conocer, aprender a hacer y aprender a ser.
            </Typography>

            <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
              El objetivo principal de los programas académicos desarrollados por Academia Global, es apoyar a nuestros colaboradores a su crecimiento profesional. Cualquier persona de cualquier edad, si desea estudiar en esta modalidad virtual se le puede facilitar al 100%.
            </Typography>

            <Typography variant="body2" sx={{ fontSize: '24px !important', fontWeight: 500, lineHeight: 1.6 }}>
              Trabaja y estudia con nuestro modelo
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};
