import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  
  palette: {
    primary: { main: "#1C42E8" },
    secondary: { main: "#F0D224" },
    background: {
      default: "#F4F4F4",
      paper: "#FFFFFF", // opcional
    },
    text: {
      primary: '#343A40',
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Poppins',
    h1: {      
      fontWeight: 500,           // medium
      fontSize: '3.125rem',      // 50px
      lineHeight: 1.2,           // 60/50 = 1.2
      '@media (max-width:1536px)': {
        fontSize: '2.875rem',    // 46px
        lineHeight: 1.217,       // 56/46
      },
      '@media (max-width:1366px)': {
        fontSize: '2.625rem',    // 42px
        lineHeight: 1.238,       // 52/42
      },
      '@media (max-width:1200px)': {
        fontSize: '2.375rem',    // 38px
        lineHeight: 1.263,       // 48/38
      },
      '@media (max-width:900px)': {
        fontSize: '2.125rem',    // 34px
        lineHeight: 1.294,       // 44/34
      },
      '@media (max-width:600px)': {
        fontSize: '1.875rem',    // 30px
        lineHeight: 1.333,       // 40/30
      },
    },
    h2: {      
      fontWeight: 600,
      fontSize: '2.25rem',     // 36px
      lineHeight: 1.222,       // 44/36
      '@media (max-width:1536px)': {
        fontSize: '2.125rem',  // 34px
        lineHeight: 1.235,
      },
      '@media (max-width:1366px)': {
        fontSize: '1.875rem',  // 30px
        lineHeight: 1.267,
      },
      '@media (max-width:1200px)': {
        fontSize: '1.75rem',   // 28px
        lineHeight: 1.286,
      },
      '@media (max-width:900px)': {
        fontSize: '1.5rem',    // 24px
        lineHeight: 1.333,
      },
      '@media (max-width:600px)': {
        fontSize: '1.375rem',  // 22px
        lineHeight: 1.364,
      },
    },
    h3: {      
      fontWeight: 600,
      fontSize: '1.75rem',     // 28px
      lineHeight: 1.286,       // 36/28
      '@media (max-width:1536px)': {
        fontSize: '1.625rem',  // 26px
        lineHeight: 1.308,
      },
      '@media (max-width:1366px)': {
        fontSize: '1.5rem',    // 24px
        lineHeight: 1.333,
      },
      '@media (max-width:1200px)': {
        fontSize: '1.375rem',  // 22px
        lineHeight: 1.364,
      },
      '@media (max-width:900px)': {
        fontSize: '1.25rem',   // 20px
        lineHeight: 1.4,
      },
      '@media (max-width:600px)': {
        fontSize: '1.125rem',  // 18px
        lineHeight: 1.444,
      },
    },
    h4: {      
      fontWeight: 600,
      fontSize: '1.25rem',     // 20px
      lineHeight: 1.4,         // 28/20
      '@media (max-width:1366px)': {
        fontSize: '1.125rem',  // 18px
        lineHeight: 1.444,
      },
      '@media (max-width:1200px)': {
        fontSize: '1.0625rem', // 17px
        lineHeight: 1.471,
      },
      '@media (max-width:900px)': {
        fontSize: '1rem',      // 16px
        lineHeight: 1.5,
      },
      '@media (max-width:600px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
    },
    h5: {
      
      fontWeight: 700,
      fontSize: '1.25rem',     // 20px
      lineHeight: 1.4,         // 28/20
      '@media (max-width:1366px)': {
        fontSize: '1.125rem',  // 18px
        lineHeight: 1.444,
      },
      '@media (max-width:1200px)': {
        fontSize: '1.0625rem', // 17px
        lineHeight: 1.471,
      },
      '@media (max-width:900px)': {
        fontSize: '1rem',      // 16px
        lineHeight: 1.5,
      },
      '@media (max-width:600px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
    },
    body1: {
      fontWeight: 400,
      fontSize: '0.875rem',    // 14px
      lineHeight: 1.429,       // Ajustado para mejor legibilidad
      '@media (max-width:1366px)': {
        fontSize: '0.8125rem', // 13px
        lineHeight: 1.462,
      },
      '@media (max-width:1200px)': {
        fontSize: '0.8125rem', // 13px
        lineHeight: 1.462,
      },
      '@media (max-width:900px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.5,
      },
      '@media (max-width:600px)': {
        fontSize: '0.875rem',  // 14px (mantener legibilidad)
        lineHeight: 1.5,
      },
    },
    body2: {
      fontWeight: 400,
      fontSize: '1rem',        // 16px
      lineHeight: 1.5,         // 24/16
      '@media (max-width:1366px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
      '@media (max-width:1200px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
      '@media (max-width:900px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.571,
      },
      '@media (max-width:600px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.571,
      },
    },
    body3: {
      fontWeight: 400,
      fontSize: '1.125rem',    // 18px
      lineHeight: 1.333,       // 24/18
      '@media (max-width:1366px)': {
        fontSize: '1.0625rem', // 17px
        lineHeight: 1.412,
      },
      '@media (max-width:1200px)': {
        fontSize: '1rem',      // 16px
        lineHeight: 1.5,
      },
      '@media (max-width:900px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
      '@media (max-width:600px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.571,
      },
    } as any, // Para evitar el error de TypeScript con body3
    subtitle1: {
      fontWeight: 500,
      fontSize: '1rem',        // 16px
      lineHeight: 1.5,         // 24/16
      '@media (max-width:1366px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
      '@media (max-width:1200px)': {
        fontSize: '0.9375rem', // 15px
        lineHeight: 1.533,
      },
      '@media (max-width:900px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.571,
      },
      '@media (max-width:600px)': {
        fontSize: '0.875rem',  // 14px
        lineHeight: 1.571,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '40px'
        },
        containedWarning: {
          color: '#fff'
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false, // aseguramos que NO use los breakpoints internos
      },
      styleOverrides: {
        root: {
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          '&.MuiInputLabel-shrink': {
            // Cuando el label se encoge (shrink)
            transform: 'translate(0px, -19px) scale(0.75)',
            paddingLeft: '4px',
            paddingRight: '4px',
            color: '#343A40',
            fontWeight: 500,
            fontSize: '16px'
          },
        },
        outlined: {
          // Específico para outlined variant
          transform: 'translate(14px, 10px) scale(1)',
          '&.MuiInputLabel-shrink': {
            transform: 'translate(0px, -19px) scale(0.75)',
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        // Estas serán las props por defecto para todos los TextField
        variant: 'outlined',
        fullWidth: true,
        size: 'medium',
        autoComplete: 'new-password',
      },
      styleOverrides: {
        root: ({theme}) => ({
          // Estilos globales para TextField
          marginBottom: '1rem',
          '& .MuiInputBase-input': {
            height: '40px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            backgroundColor: '#FFFFFF', // Fondo blanco para el input
          },
          '& .MuiOutlinedInput-root': {
            // Estilos específicos para el outlined variant
            borderRadius: '4px',
            backgroundColor: '#FFFFFF', // Fondo blanco para el contenedor
          },
          '& .MuiInputLabel-root': {
            // Estilos para el label
            transform: 'translate(14px, 10px) scale(1)',
            '&.Mui-focused': {
              transform: 'translate(0px, -19px) scale(0.75)',
            },
            '&.MuiFormLabel-filled': {
              transform: 'translate(0px, -19px) scale(0.75)',
            },
          },
          '& .Mui-focused .MuiInputAdornment-root .MuiSvgIcon-root': {
            color: theme.palette.primary.light,
          },
          '& .MuiInputAdornment-root .MuiSvgIcon-root': {
            color: theme.palette.text.secondary,
          },
        }),
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          "& legend": {
            maxWidth: "0%",
          },
        },
        root: {
          backgroundColor: '#FFFFFF', // Fondo blanco para OutlinedInput
        },
        input: {
          padding: '14px',
          backgroundColor: 'transparent', // Transparente aquí porque el padre ya tiene blanco
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          height: '40px',
        },
      }
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;