import { useEffect, useState } from "react";
import { Box, Card, CardContent, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Comillas from "../../../assets/icons/comillas.svg?react";

type CarouselTestimoniosProps = {
    testimonials: any[];
}

export const CarouselTestimonios: React.FC<CarouselTestimoniosProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(1);
  const [displayTestimonials, setDisplayTestimonials] = useState<any[]>([]);

//   const handleNext = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

    const handleNext = () => {
        if (testimonials.length <= 1) return;
        
        // setIsAnimating(true);
        
        setIndex((prev) => {
            const newIndex = prev + 1;
            
            // Si llegamos al último elemento (clon), saltar al inicio sin animación
            if (newIndex >= displayTestimonials.length - 1) {
                setTimeout(() => {
                setIndex(0);
                }, 300);
            }
            
            return newIndex;
        });
        
        // setTimeout(() => setIsAnimating(false), 500);
    };

const handlePrev = () => {
    if (testimonials.length <= 1) return;
    
    // setIsAnimating(true);
    
    setIndex((prev) => {
      const newIndex = prev - 1;
      
      // Si llegamos al primer elemento (clon), saltar al final sin animación
      if (newIndex <= 0) {
        setTimeout(() => {
          setIndex(displayTestimonials.length - 2);
        }, 300);
      }
      
      return newIndex;
    });
    
    // setTimeout(() => setIsAnimating(false), 500);
  };

  // Prepara testimonials para efecto infinito
  useEffect(() => {
    if (testimonials.length === 0) return;
    
    // Duplicamos el array al inicio y al final para efecto infinito
    const extended = [
      testimonials[testimonials.length - 1], // Último al inicio
      ...testimonials,
      testimonials[0], // Primero al final
    ];
    
    // setDisplayTestimonials(extended);
    setTimeout(() => {
      setDisplayTestimonials(extended);
    }, 0);
    // Comenzamos en el índice 1 (primer testimonial real)

    setTimeout(() => {
      setIndex(1);
    }, 0);
  }, [testimonials]);

  // Calcular el desplazamiento para centrar la card activa
  const cardWidth = { xs: 280, sm: 320, md: 402 }; // ancho de la card
  const gap = { xs: 16, sm: 24, md: 32 }; // espacio entre cards
  const totalCardWidth = cardWidth.md + gap.md;

  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: { xs: 1, sm: 2, md: 4 },
        py: { xs: 4, md: 5 },
        px: { xs: 1, sm: 2 },
      }}
    >
      {/* ◀ Flecha izquierda */}
      <IconButton
        onClick={handlePrev}
        sx={{
            flexShrink: 0,
            background: "white",
            boxShadow: 2,
            width: { xs: 36, md: 40 },
            height: { xs: 36, md: 40 },
            "&:hover": { background: "#f0f0f0" },
        }}
      >
        <ArrowBackIosNewIcon sx={{ 
            color: "#1A56DB",
            fontSize: { xs: 18, md: 24 }
        }} 
        />
      </IconButton>
      {/* Contenedor cards */}
      <Box
            sx={{
                display: "flex",
                overflow: "hidden",
                width: "100%",
                maxWidth: { 
                    xs: `${cardWidth.xs}px`, 
                    sm: `${cardWidth.sm}px`, 
                    md: "1140px" 
                },
                position: "relative",
                justifyContent: "center",
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    width: { 
                        xs: `${cardWidth.xs}px`, 
                        sm: `${cardWidth.sm}px`, 
                        md: `${cardWidth.md}px` 
                    },
                    overflow: "visible",
                    paddingTop: '10px',
                    paddingBottom: '20px',
                    minHeight: { xs: '300px', sm: '280px', md: '330px' }
                }}
            >
            <motion.div
                animate={{
                    x: `-${index * totalCardWidth}px`,
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                    display: "flex",
                    gap: `${gap.md}px`,
                    position: "absolute",
                    left: 0,
                }}
            >
                {displayTestimonials.map((item, i) => {
                const isCenter = i === index;

                return (
                    <motion.div
                        key={i}
                        animate={{
                            scale: isCenter ? 1 : 0.85,
                            opacity: isCenter ? 1 : 0.3,
                            filter: isCenter ? "blur(0px)" : "blur(2px)",
                        }}
                        transition={{ duration: 0.3 }}
                        style={{
                            flexShrink: 0,
                        }}
                    >
                    <Card
                        elevation={isCenter ? 8 : 1}
                        sx={{
                            width: { 
                                xs: cardWidth.xs, 
                                sm: cardWidth.sm, 
                                md: cardWidth.md 
                            },
                            height: 300,                   
                            borderRadius: "16px",
                        }}
                    >
                        <CardContent 
                            sx={{ 
                                textAlign: "center", 
                                py: { xs: 3, md: 4 }, 
                                px: { xs: 2, md: 3 } 
                            }}
                        >
                        <Box
                            sx={{
                                color: "#FFD700",
                                fontSize: { xs: 32, md: 40 },
                                mb: 1,
                            }}
                        >
                            <Comillas />
                        </Box>

                        <Typography variant="body1" sx={{ mb: 3 }}>
                            {item.text}
                        </Typography>

                        <Typography variant="h4" sx={{ mb: 0.5 }}>
                            {item.name}
                        </Typography>

                        <Typography variant="body2" color="primary">
                            {item.grade}
                        </Typography>
                        </CardContent>
                    </Card>
                    </motion.div>
                );
                })}
            </motion.div>
            </Box>
        </Box>      

      
      {/* ▶ Flecha derecha */}
      <IconButton
        onClick={handleNext}
        sx={{
            flexShrink: 0,
            background: "white",
            boxShadow: 2,
            width: { xs: 36, md: 40 },
            height: { xs: 36, md: 40 },
            "&:hover": { background: "#f0f0f0" },
        }}
      >
        <ArrowForwardIosIcon sx={{ color: "#1A56DB", fontSize: { xs: 18, md: 24 } }} />
      </IconButton>
    </Box>
  );
}
