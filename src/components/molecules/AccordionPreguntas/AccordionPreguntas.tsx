// import Box from "@mui/material/Box";
// import { Typography } from "../../atoms/Typography/Typography";
// import { AddFaqs } from "../../../assets/icons";

// export const AccordionPreguntas: React.FC = () => {
//     return(
//         <Box
//             sx={{ 
//                 minHeight: '70px',
//                 borderBottom: '1px solid #808080',
//                 display: 'flex',
//                 alignItems: 'flex-start',
//                 justifyContent: 'space-between',
//                 cursor: 'pointer'
//             }}
//         >
//             <Typography variant="body3" component="span" sxProps={{fontSize: '20px'}}>
//                 ¿Quién puede inscribirse en los Programas Académicos de UCC?
//             </Typography>
//             <AddFaqs />
            
//         </Box>
//     );
// }

import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export type AccordionPreguntaProps = {
    pregunta: string;
    respuesta: string;
}

export const AccordionPreguntas: React.FC<AccordionPreguntaProps> = ({ pregunta, respuesta }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box
            sx={{ 
                borderBottom: '1px solid #808080',
            }}
        >
            {/* Header del acordeón */}
            <Box
                onClick={toggleAccordion}
                sx={{ 
                    minHeight: '70px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    py: 2,
                    transition: 'background-color 0.2s',
                    '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.02)',
                    }
                }}
            >
                <Typography 
                    variant="body1" 
                    sx={{
                        fontSize: '20px',
                        fontWeight: 400,
                        pr: 2,
                        color: '#333',
                    }}
                >
                    {pregunta}
                </Typography>
                
                <IconButton 
                    sx={{ 
                        color: '#808080',
                        flexShrink: 0,
                    }}
                >
                    {isOpen ? (
                        <RemoveCircleOutlineIcon sx={{ fontSize: 32 }} />
                    ) : (
                        <AddCircleOutlineIcon sx={{ fontSize: 32 }} />
                    )}
                </IconButton>
            </Box>

            {/* Contenido colapsable */}
            <Collapse in={isOpen}>
                <Box sx={{ pb: 3, pr: 6 }}>
                    <Typography 
                        variant="body2" 
                        sx={{
                            color: '#666',
                            lineHeight: 1.6,
                        }}
                    >
                        {respuesta}
                    </Typography>
                </Box>
            </Collapse>
        </Box>
    );
};