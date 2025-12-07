import { useTheme } from "@mui/material";
import Box from "@mui/material/Box"

type DuracionCardProps = {
    children: React.ReactNode;
}

export const DuracionCard: React.FC<DuracionCardProps> = ({children}) => {
    const theme = useTheme();

    return(
        <Box sx={{ 
            mt: 6, 
            ml: 2,
            borderLeft: `6px solid ${theme.palette.primary.main}`, 
            height: '82px',
            display:'flex',
            alignItems: 'center'
        }}>
            {children}
        </Box>
    )
}