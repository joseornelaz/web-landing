import { Box, useTheme } from '@mui/material';
import React from 'react';
import bg from '../../../assets/bg.png';
import bg2 from '../../../assets/bg2.png';

type BackgroundContainerProps = {
    children: React.ReactNode;
    backgroundSide?: 'left' | 'right';
}

export const BackgroundContainer: React.FC<BackgroundContainerProps> = ({ children, backgroundSide = 'right' }) => {
    const theme = useTheme();
    
    const style = (backgroundSide === 'right') ?
             {
                width: "100%",
                position: "relative" as const,
                overflow: "hidden" as const,
                zIndex: 1,
                py: 6,
                minHeight: '710px',
                "::before": {
                    content: '""',
                    position: "absolute" as const,
                    inset: 0,
                    backgroundImage: `url(${bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    opacity: 0.5,
                    zIndex: -1,
                    transition: "all .3s ease",
                    // MOBILE
                    [theme.breakpoints.down("sm")]: {
                        opacity: 0.20,
                        backgroundPosition: "right",
                    },

                    // TABLET
                    [theme.breakpoints.between("sm", "md")]: {
                        opacity: 0.30,
                        backgroundPosition: "right",
                    },
                },
            }
        :
            {
                width: "100%",
                position: "relative" as const,
                overflow: "hidden" as const,
                zIndex: 1,
                pb: 6,
                minHeight: '550px',
                "::before": {
                    content: '""',
                    position: "absolute" as const,
                    inset: 0,
                    backgroundImage: `url(${bg2})`,
                    backgroundSize: "cover",
                    opacity: 1,
                    zIndex: -1,
                    transition: "all .3s ease",
                },
            }       


    return (
        <Box
            sx={style}
        >
            { children }
        </Box>
    )
}