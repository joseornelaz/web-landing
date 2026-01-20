import Box from "@mui/material/Box";
import { Card, Typography } from "@mui/material";
import HomeAcademico from "../../../assets/home/home_academico.png";
import './HomeModeloAcademico.scss';

export const HomeModeloAcademico: React.FC = () => { 
  
  const textos = () => (
    <Box 
      sx={{ 
        color: "white",
        minHeight: 280, 
        maxHeight: 380, 
        overflowY: 'auto', 
        overflowX: 'hidden',
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'transparent',
            borderRadius: '4px',
        },
        '&:hover::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(0,0,0,.3)',
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent',
        }
      }}
    >
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

        <Typography
          variant="h1"
          sx={{ mb: 2, mt: 2 }}
        >
          Aprender de forma flexible es posible
        </Typography>

        <Typography variant="body2" sx={{ mb: 3, lineHeight: 1.6 }}>
          Nuestro modelo por competencias también se orienta hacia un proceso de enseñanza-aprendizaje significativo, es decir, que aquello que aprendes en tus asignaturas, logres aplicarlo en tu vida cotidiana y que a través de un proceso analítico personal, decidas qué recursos intelectuales utilizar para resolver tus retos diarios.
        </Typography>
    </Box>
  )


  return (    
      
    <Box className="modelo-academico-container">
      <Card className="modelo-card">
        <Box className="modelo-content">
          {/* IMAGEN */}
          <Box
            component="img"
            src={HomeAcademico}
            alt="Modelo académico"
            className="modelo-imagen"
          />
          
          {/* TEXTO */}
          <Box className="modelo-texto">
            {textos()}
          </Box>
        </Box>
      </Card>
    </Box>
   
  );
};
