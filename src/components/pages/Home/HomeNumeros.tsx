import Box from "@mui/material/Box";
import { Typography } from "../../atoms/Typography/Typography";
import { MetricCard } from "../../molecules/MetricCard/MetricCard";
import { useMediaQuery, useTheme } from "@mui/material";

export const HomeNumeros: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    
    const metricardArray = [
        { title: 'Alumnos activos en nuestros Programas Académicos', value: '+6,739'},
        { title: 'Generaciones', value: '98'},
        { title: 'Egresados Históricos', value: '+7,155'},
    ];

    return(
        // <Box
        //     sx={{
        //         display: 'flex',
        //         alignItems: 'center',
        //         justifyItems: 'center',
        //         flexDirection: 'column',
        //         gap: '58px',
        //         width: '100%'
        //     }}
        // >
        //     <Typography component="h3" variant="h3" sxProps={{ textAlign: 'center'}}>Coppel Universidad Corporativa en números</Typography>
        //     <Box
        //         sx={[
        //             { display: 'flex', gap: '33px', flexWrap: 'wrap', justifyContent: 'center'},
        //             isMobile && {  }
        //         ]}
        //     >
        //         {
        //             metricardArray.map((item, i) => <MetricCard key={i} title={item.title} value={item.value} />)
        //         }
        //     </Box>
        // </Box>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
                flexDirection: 'column',
                gap: '58px',
                width: '100%'
            }}
        >
            <Typography component="h3" variant="h3" sxProps={{ textAlign: 'center'}}>
                Coppel Universidad Corporativa en números
            </Typography>
            <Box
                sx={[
                    { 
                        display: 'flex', 
                        gap: '33px', 
                        justifyContent: 'center'
                    },
                    isMobile && { 
                        flexWrap: 'nowrap',
                        overflowX: 'auto',
                        width: '100%',
                        justifyContent: 'flex-start',
                        scrollSnapType: 'x mandatory',
                        '&::-webkit-scrollbar': {
                            height: '8px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,0.2)',
                            borderRadius: '4px',
                        },
                        '& > *': {
                            flexShrink: 0,
                            scrollSnapAlign: 'center',
                            minWidth: 'calc(100% - 66px)', // 100% menos el gap total
                        },
                        pl: '24px',
                        pr: '24px',
                        pb: '16px'
                    },
                    !isMobile && {
                        flexWrap: 'wrap'
                    }
                ]}
            >
            {
                metricardArray.map((item, i) => <MetricCard key={i} title={item.title} value={item.value} />)
            }
            </Box>
        </Box>
    );
}