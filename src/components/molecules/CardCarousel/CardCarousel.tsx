import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import { CardTestimonio } from './CardTestimonio';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CardProgramas } from './CardProgramas';

// --- Componente de flecha personalizado ---
const CustomNextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: { xs: 5, md: -30 }, // Posición en móvil y desktop
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: 'grey.700',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

// --- Componente de flecha personalizado ---
const CustomPrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: { xs: 5, md: -30 }, // Posición en móvil y desktop
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
        color: 'grey.700',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.04)',
        },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

type CardCarouselProps = {
    items: { Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>, text: string, name?: string, grade?: string }[];
    type: 'testimonios' | 'prepa';
}

// --- Componente principal del Carrusel ---
const CardCarousel:React.FC<CardCarouselProps> = ({ items, type }) => {
  const [centerPaddingDesktop, setCenterPaddingDesktop] = React.useState<string>('10px');

  React.useEffect(() => {
    if(type === "prepa") {
      setCenterPaddingDesktop('60px');
    }
  },[type]);

  // Estado para rastrear la tarjeta activa (la que va a estar centrada)
  const [activeSlide, setActiveSlide] = useState(0);
  const theme = useTheme();
  // Determinar si es pantalla pequeña para cambiar la configuración del slider
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));


  // Configuración de react-slick
  const settings = {
    // Propiedades para lograr el efecto "infinito"
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 3000, // 3000 milisegundos (3 segundos)
    slidesToShow: (isMobile || isTablet) ? 1 : 3, // 1 en móvil, 2 en tablet, 3 en desktop
    slidesToScroll: 1,
    centerMode: true, // Esto ayuda a centrar la card
    centerPadding: isMobile ? '0px' : centerPaddingDesktop, // Espacio lateral cuando está centrado
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // Función que se llama ANTES de que el slide cambie. 'next' es el índice de la nueva card activa.
    beforeChange: (_current: any, next: any) => setActiveSlide(next),
    // Paginación personalizada (los puntos inferiores)
    appendDots: (dots: any) => (
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
        <ul style={{ margin: "0", padding: "0" }}> {dots} </ul>
      </Box>
    ),
    customPaging: (i: any) => (
      <Box
        sx={{
          width: 10,
          height: 10,
          borderRadius: '50%',
          bgcolor: i === activeSlide ? 'grey.900' : 'grey.400', // Color activo/inactivo
          transition: 'background-color 0.3s',
        }}
      />
    ),
  };

  const getCardStyles = (isActive: boolean) => {
    const base = {
        p: 3,
        mx: 2, // Espacio entre cards
        borderRadius: 2,
        boxShadow: isActive ? theme.shadows[8] : theme.shadows[1], // Sombra más pronunciada para la activa
        transition: 'all 0.5s ease-in-out',
        // La magia para el resaltado y difuminado
        transform: isActive ? 'scale(1.05)' : 'scale(0.95)',
        opacity: isActive ? 1 : 0.5,
        // Altura y color de fondo
        minHeight: '300px', // Altura fija para mantener la consistencia
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        // Aseguramos que la card central esté sobre las demás al usar 'centerMode'
        zIndex: isActive ? 10 : 1,
        // Opcional: estilo para el difuminado del texto en las inactivas
        color: isActive ? 'text.primary' : 'text.secondary',
    };
    if(type === 'testimonios') {
      return base;
    }else if(type === 'prepa') {
      return {
        ...base,
        borderRadius: '16px',
        minHeight: '241px',
        opacity: 1,
        transform: 'scale(0.95)',
        color: 'text.primary',
        zIndex: 1,
        boxShadow: 'none',
      }
    }
  }  

  const getCardType = (item: any, cardStyles: any) => {
    if(type === 'testimonios') {
      return <CardTestimonio item={item} cardStyles={cardStyles} />
    }else if(type === 'prepa') {
      return <CardProgramas item={item} cardStyles={cardStyles} />
    }
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 1200, margin: '0 auto', p: { xs: 0, md: 4 } }}>
      <Slider {...settings}>
        {items.map((item, index) => {
          // 1. Determinar si esta card es la activa (central)
          const isActive = index === activeSlide;

          // 2. Aplicar estilos de transformación (escala) y opacidad
          const cardStyles = getCardStyles(isActive);

          return (
            <Box key={index} sx={[type === 'testimonios' && { py: 4 }]}> {/* Padding vertical para compensar el escalado */}
              {
                  getCardType(item, cardStyles)
              }
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default CardCarousel;